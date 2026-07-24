import { useState } from "react";
import PromptBox from "../components/PromptBox";
import Logs from "../components/Logs";
import Preview from "../components/Preview";



function Home() {

    const [logs, setLogs] = useState([]);
    const [previewUrl, setPreviewUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState("");

    const [projectName, setProjectName] = useState("");

    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6">

            <h1 className="text-4xl font-bold text-center mb-8">
                🤖 AI Website Builder
            </h1>

            <div className="grid grid-cols-3 gap-6 h-[85vh]">

                <div className="col-span-1">
                    <PromptBox
                        setLogs={setLogs}
                        setPreviewUrl={setPreviewUrl}
                        setPreviewUrl={setPreviewUrl}
                        setDownloadUrl={setDownloadUrl}
                        loading={loading}
                        setLoading={setLoading}

                        setProjectName={setProjectName}
                    />

                    <Logs logs={logs} />
                </div>

                <div className="col-span-2">
                    <Preview 
                        previewUrl={previewUrl}
                        downloadUrl={downloadUrl}
                        projectName={projectName}
                    />
                </div>

            </div>

        </div>
    );

}

export default Home;