import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

function createDirectory({ path }) {
    fs.mkdirSync(path, { recursive: true });
    console.log(`📁 Created: ${path}`);
}


function writeFile({ path, content }) {

    fs.mkdirSync(path.substring(0, path.lastIndexOf("/")), {
        recursive: true
    });

    fs.writeFileSync(path, content, "utf8");

    console.log(`📄 Wrote: ${path}`);

}

async function generatePlan(userPrompt) {

    const response = await ai.models.generateContent({

        model: "gemini-2.5-flash",

        contents: `
            You are an AI coding agent.

            Return ONLY valid JSON.

            Do not write explanations.
            Do not use markdown.
            Do not use code fences.

            The JSON must be an array.

            Each object must have:

            {
                "tool": "...",
                "args": { ... }
            }

            Available tools:

            1. createDirectory
            {
                "tool":"createDirectory",
                "args":{
                    "path":"project-name"
                }
            }

            2. writeFile
            {
                "tool":"writeFile",
                "args":{
                    "path":"project/index.html",
                    "content":"..."
                }
            }

            The goal is to completely finish the user's request.

            Generate EVERY step required.

            Do not stop after creating a directory.

            Include every file that must exist.

            Every HTML, CSS and JavaScript file must be created using writeFile.

            Return the COMPLETE execution plan.

            User Request:

            ${userPrompt}
        `
    });

    return response.text;
}

const availableTools = {
    createDirectory,
    writeFile
};


async function runAgent(userPrompt) {

    const planText = await generatePlan(userPrompt);

    console.log("\n========== PLAN ==========\n");
    console.log(planText);
    console.log("\n==========================\n");

    const cleaned = planText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    const parsed = JSON.parse(cleaned);

    const plan = Array.isArray(parsed)
        ? parsed
        : parsed.plan;

    for (const step of plan) {

        const tool = availableTools[step.tool];

        if (!tool) {
            console.log(`Unknown tool: ${step.tool}`);
            continue;
        }

        console.log(`⚙️ Executing ${step.tool}`);

        tool(step.args);

    }

    console.log("\n✅ Project Generated Successfully!");

    const projectName = plan.find(
        step => step.tool === "createDirectory"
    )?.args.path;

    return {
        success: true,
        projectName,
        plan
    };

}

export { runAgent };