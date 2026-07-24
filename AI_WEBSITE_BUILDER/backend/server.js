import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { runAgent } from "./agent.js";
import path from "path";
import fs from "fs";

import archiver from "archiver";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    "/projects",
    express.static(path.join(process.cwd()))
);

app.get("/", (req, res) => {
    res.send("AI Builder Backend Running 🚀");
});

app.post("/generate", async (req, res) => {

    try {

        const { prompt } = req.body;

        const result = await runAgent(prompt);

        res.json(result);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

app.get("/download/:projectName", (req, res) => {

    const projectName = req.params.projectName;

    const projectPath = path.join(process.cwd(), projectName);

    const zipName = `${projectName}.zip`;

    if (!fs.existsSync(projectPath)) {

        return res.status(404).json({
            success: false,
            message: "Project not found"
        });

    }

    res.attachment(zipName);

    const archive = archiver("zip", {
        zlib: { level: 9 }
    });

    archive.on("error", (err) => {
        console.error(err);
        res.status(500).end();
    });
    archive.pipe(res);

    archive.directory(projectPath, false);

    archive.finalize();

});


app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});