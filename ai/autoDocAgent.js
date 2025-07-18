import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;
const MODEL_NAME = 'gemini-2.5-pro';
const DOC_PATH = path.resolve('docs', 'UPDATED_DOCUMENTATION.md');
const COMMIT_MSG = 'docs: update autogenerated documentation';

const log = (msg, type = 'info') => {
  const prefix = {
    info: '📘',
    error: '❌',
    success: '✅',
  }[type];
  console.log(`${prefix} ${msg}`);
};

const safeExec = (cmd) => {
  try {
    return execSync(cmd, { encoding: 'utf-8' }).trim();
  } catch {
    return '';
  }
};

const fileExists = (filePath) => fs.existsSync(filePath);

const readFile = (filePath) =>
  fileExists(filePath) ? fs.readFileSync(filePath, 'utf-8') : '';

const writeFile = (filePath, content) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
};

const generatePrompt = (diff, docs) => `
You are an AI documentation assistant.

Here is a recent code update (git diff):
\`\`\`diff
${diff}
\`\`\`

And here is the current documentation:
\`\`\`markdown
${docs}
\`\`\`

Update only relevant sections based on the changes. Keep existing content unchanged unless necessary. Follow Markdown formatting and avoid duplicating content.

Return ONLY the updated, complete Markdown.
`;

const commitAndPush = (filePath) => {
  try {
    execSync(`git add ${filePath}`);
    execSync(`git commit -m "${COMMIT_MSG}"`);
    execSync('git push');
    log('Documentation committed and pushed.', 'success');
  } catch {
    log('Git commit/push failed.', 'error');
  }
};

async function runDocumentationAgent() {
  log('Starting documentation agent...');

  if (!API_KEY) {
    log('Missing GOOGLE_API_KEY. Check your .env.', 'error');
    process.exit(1);
  }

  const gitDiff = safeExec('git diff HEAD~1 HEAD');
  if (!gitDiff) {
    log('No new code changes detected. Skipping generation.', 'success');
    return;
  }

  const currentDocs = readFile(DOC_PATH);
  const prompt = generatePrompt(gitDiff, currentDocs);

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME, apiVersion: 'v1beta' });

    log('Querying Gemini AI...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const updatedMarkdown = response.text().trim();

    if (!updatedMarkdown || updatedMarkdown === currentDocs.trim()) {
      log('No significant documentation changes required.', 'info');
      return;
    }

    writeFile(DOC_PATH, updatedMarkdown);
    log(`Documentation updated at ${DOC_PATH}`, 'success');
    commitAndPush(DOC_PATH);

  } catch (err) {
    log(`AI generation error: ${err.message}`, 'error');
  }
}

runDocumentationAgent();
