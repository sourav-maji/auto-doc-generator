# 🧠 auto-doc-generator

**AI-powered documentation assistant** that updates your project's technical documentation automatically on every code change.

---

## ✨ Overview

`auto-doc-generator` is a Node.js backend template that uses **Google Gemini AI** to analyze recent Git changes (`git diff`) and intelligently update your documentation files. It's designed to help teams maintain accurate technical documentation effortlessly.

- 📚 Auto-generates or updates Markdown docs based on recent code changes
- 🧠 Uses Google Gemini (via Generative AI API) for intelligent summarization
- 🔁 Integrates with Git to track changes and commit documentation updates
- ⚙️ Configurable as part of a CI/CD pipeline or used manually

---

## 🚀 Features

- 🔍 Analyzes `git diff` between latest commits
- 🤖 Sends code changes + current docs to Gemini for contextual updates
- 📝 Updates only relevant sections in your `docs/UPDATED_DOCUMENTATION.md`
- ✅ Optionally commits & pushes the updated docs to your GitHub repo

---

## 📦 Stack

- Node.js (Express + File System)
- Google Gemini 2.5 (Generative AI API)
- Git (for diff/commit automation)
- dotenv for environment configuration

---

## 📁 Directory Structure
crud-backend/
├── ai/
│ └── autoDocAgent.js # Core AI doc generator logic
├── docs/
│ └── UPDATED_DOCUMENTATION.md # Maintained documentation file
├── routes/
│ └── userRoutes.js # Sample route for demo
├── controllers/
│ └── userController.js # Controller logic
├── app.js # Express app entry point
├── package.json
├── .env
└── README.md # You're reading this!


---

## 🛠️ Setup & Usage

### 1. Clone and Install

```bash

git clone https://github.com/sourav-maji/auto-doc-generator.git
cd auto-doc-generator
npm install
```

### 2. Create .env file

GOOGLE_API_KEY=your_api_key
GOOGLE_GENAI_USE_VERTEXAI=FALSE
GOOGLE_CLOUD_LOCATION=us-central1
GOOGLE_CLOUD_PROJECT=your_project_id
PROJECT_ID=your_project_id

### 3. Run the App
 Start the backend:
``` bash 
npm start
```
  Generate updated documentation:
  ```bash
  npm run generate-docs
```
## ✅ Example Output
After pushing a change (e.g., new route added), run:

```bash
  npm run generate-docs
```
The agent will:

1. Fetch git diff 
2. Use Gemini to analyze the diff and the current documentation
3. Update the relevant sections only
4. Commit and push the new UPDATED_DOCUMENTATION.md

## 👨‍💻 Developer Productivity Use Case
This project is built as a starter template for teams or solo developers who want to:
- Automate documentation workflows
- Integrate AI into their backend stack
- Ensure up-to-date technical documentation with minimal overhead

## 🙋‍♂️ Maintainer & 👨‍💻 Author
Sourav Maji — AI Automation Engineer & Backend Developer

[**GitHub**](https://github.com/sourav-maji) | [**Linkedin**](https://www.linkedin.com/in/souravmajiwb/)