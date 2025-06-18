# CRUD Backend with AI-Powered Documentation

This is a simple Node.js CRUD backend application with an integrated AI agent that automatically generates and updates technical documentation on each code push using Gemini AI.

---

## Features

- Basic CRUD operations for a `User` resource (in-memory)
- Express.js backend API
- AI agent (`autoDocAgent.js`) that:
  - Detects code changes via git diff
  - Generates updated technical documentation using Gemini API
  - Commits and pushes updated documentation back to GitHub

---

## Getting Started

### Prerequisites

- Node.js v16+ installed
- Git installed and repo initialized
- Gemini API key from Google Generative AI platform

### Installation

```bash
npm install

```
## Create a .env file in the root folder:


```env
GEMINI_API_KEY=your-api-key-here
```

## Running the App
```bash
npm start
```
API is available at: http://localhost:3000/api/users


## Generating Documentation Manually

```bash
npm run generate-docs
```

This script runs the AI agent to generate updated docs based on the latest commit.

## Notes
- The AI agent requires a git repository with at least one commit

- The in-memory user store resets on server restart (for demo only)




- Integrate with your GitHub Actions or CI/CD for automatic docs generation on push


