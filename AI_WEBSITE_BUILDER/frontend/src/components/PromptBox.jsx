import { useState } from "react";
import api from "../services/api";

function PromptBox({ setLogs , setPreviewUrl , setDownloadUrl, loading , setLoading , setProjectName }) {

    const [prompt, setPrompt] = useState("");

    function sleep(ms) {

        return new Promise((resolve) => {

            setTimeout(resolve, ms);

        });

    }

    async function generate() {

        if (!prompt.trim()) return;

        setLogs(["🧠 Sending request..."]);

        try {

            setLoading(true);

            const res = await api.post("/generate", {
                prompt
            });

            setProjectName(res.data.projectName);

            console.log(res.data);

            const readableLogs = res.data.plan.map((step) => {

                if (step.tool === "createDirectory") {

                    return `📁 Creating ${step.args.path}`;

                }

                if (step.tool === "writeFile") {

                    return `📄 Writing ${step.args.path}`;

                }

                return step.tool;

            });

            setLogs([]);

            for (const log of readableLogs) {

                await sleep(500);

                setLogs((prevLogs) => {

                    return [...prevLogs, log];

                });

            }

            await sleep(300);

            setLogs((prevLogs) => {

                return [...prevLogs, "✅ Project Ready"];

            });

            setPreviewUrl(
                `http://localhost:3000/projects/${res.data.projectName}/index.html`
            );

            setDownloadUrl(
                `http://localhost:3000/download/${res.data.projectName}`
            );

            setLoading(false);

        }

        catch (err) {

            console.error(err);

            setLogs([
                "❌ Backend Error"
            ]);

            setLoading(false);

        }

    }

    return (

        

        <div className="bg-zinc-900 rounded-2xl p-5 shadow-xl">

            <h2 className="text-xl font-semibold mb-4">
                Build Website
            </h2>

            <div>

                <input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Build me a Netflix clone..."
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 mb-4"
                />

                <button
                    onClick={generate}
                    disabled={loading}
                    className="
                        w-full
                        bg-blue-600
                        hover:bg-blue-700
                        disabled:bg-zinc-700
                        disabled:cursor-not-allowed
                        rounded-lg
                        py-3
                        font-semibold
                        transition
                    "
                >
                    {loading ? "Generating..." : "Generate"}
                </button>

            </div>


        </div>

    );

}

export default PromptBox;