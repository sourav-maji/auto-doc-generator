import fs from 'fs';
import simpleGit from 'simple-git';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const git = simpleGit();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function runDocumentationAgent() {
  const diff = await git.diff(['HEAD~1', 'HEAD']);
  if (!diff.trim()) {
    console.log("✅ No code changes.");
    return;
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' });

  const prompt = `
You are an expert technical documentation generator.

Here is a git diff from a CRUD backend app:
${diff}

Generate clean and clear technical documentation. Include:
- What features/functions changed
- Purpose of each change
- Updated endpoints if relevant
- Usage examples if possible

Respond in well-structured Markdown.
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const doc = response.text();

  const docPath = path.join(process.cwd(), 'TECHNICAL_DOC.md');
  fs.writeFileSync(docPath, doc);
  console.log("📄 Documentation written to TECHNICAL_DOC.md");

  await git.add(docPath);
  await git.commit('📝 Auto-generated technical documentation');
  await git.push();
}
