# AI Website Builder

An AI-powered web application that transforms natural language prompts into complete static websites.

Users simply describe the website they want (for example, **"Create a modern portfolio website"**), and the application automatically generates the corresponding HTML, CSS, and JavaScript files. The generated website can be previewed instantly inside the application and downloaded as a ZIP project with a single click.

Unlike traditional AI code generators that only return source code, this project introduces a **runtime execution engine**. Instead of allowing the AI to perform arbitrary actions, the language model generates a structured JSON execution plan, which is safely interpreted by the backend to create project directories and files.

---

## ✨ Features

- 🤖 AI-powered website generation using **Gemini 2.5 Flash**
- 📁 Automatic creation of HTML, CSS, and JavaScript project files
- ⚙️ Runtime engine that safely executes structured JSON execution plans
- 👀 Live website preview inside the application
- 📦 One-click ZIP download of generated projects
- 🏗️ Modular architecture separating AI planning from execution

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- Gemini 2.5 Flash API
- File System (fs)
- Archiver
