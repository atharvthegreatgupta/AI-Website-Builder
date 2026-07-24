function Logs({ logs }) {

    return (

        
        <div className="bg-zinc-900 rounded-2xl p-5 shadow-xl mt-6">

            <h2 className="text-xl font-semibold mb-4">
                Logs
            </h2>

            <div className="space-y-3 text-sm">

                {logs.map((log, index) => (

                    <div
                        key={index}
                        className="bg-zinc-800 rounded-lg px-3 py-2"
                    >
                        {log}
                    </div>

                ))}

            </div>


        </div>

    );

}

export default Logs;