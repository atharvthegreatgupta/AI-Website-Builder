

import axios from "axios";



function Preview({ previewUrl, downloadUrl, projectName }) {

    if (!previewUrl) {

        return (

            <div>

                <h2>Preview</h2>

                <p>No preview yet.</p>

            </div>

        );

    }

    const downloadProject = async () => {

        const response = await axios.get(downloadUrl, {
            responseType: "blob"
        });

        const url = window.URL.createObjectURL(response.data);

        const link = document.createElement("a");

        link.href = url;

        link.download = `${projectName}.zip`;
        // link.download = "project.zip";

        document.body.appendChild(link);

        link.click();

        link.remove();

        window.URL.revokeObjectURL(url);

    };

    return (

        <div>

            <h2>Preview</h2>

            {downloadUrl && (
                <button
                    onClick={downloadProject}
                    className="mb-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                >
                    📦 Download Project
                </button>
            )}

            <iframe
                src={previewUrl}
                width="100%"
                height="600"
                title="Website Preview"
            />

        </div>

    );

}

export default Preview;