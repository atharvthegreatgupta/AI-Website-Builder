
An AI-powered web application that transforms natural language prompts into complete static websites.

Users simply describe the website they want (for example, "Create a modern portfolio website"), and the application generates the corresponding HTML, CSS, and JavaScript files automatically. The generated website can be previewed instantly inside the application and downloaded as a ZIP project with a single click.

Unlike traditional AI code generators that only return source code, this project introduces a runtime execution engine. Instead of allowing the AI to perform arbitrary actions, the language model generates a structured JSON execution plan, which is safely interpreted by the backend to create project directories and files.

The project demonstrates the integration of modern AI with full-stack web development while following a modular architecture that separates AI planning from runtime execution, making the system secure, scalable, and easy to extend.

✨ Features
🤖 Generate complete websites from natural language prompts using Gemini 2.5 Flash
📁 Automatically create project folders and source files (HTML, CSS & JavaScript)
⚙️ Custom runtime engine that executes structured AI-generated JSON plans
👀 Live preview of generated websites inside the application
📦 One-click ZIP download of generated projects
🏗️ Modular architecture with a clear separation between AI planning and execution
🛠️ Tech Stack

Frontend

React.js
Tailwind CSS
Axios

Backend

Node.js
Express.js
Gemini 2.5 Flash API
Node File System (fs)
Archiver
