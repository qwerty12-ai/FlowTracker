"use client"

export default function Heatmap({clicks}) {
    return (
        <div className="relative w-full min-h-[400px] md:min-h-[700px] border border-zinc-700 rounded bg-zinc-900
        bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:40px_40px] overflow-hidden">
            {clicks.length === 0 ? (
                <div className="p-6 text-center text-zinc-300">No click data available for this page.</div>
            ) : (
                clicks.map((click, index) => (
                    <div
                        key={index}
                        className="absolute"
                        style={{ left: `${click.x}%`, top: `${click.y}%` }}
                    >
                        <div className="w-8 h-8 rounded-full bg-red-500 opacity-20 blur-md"></div>
                        <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-red-700"></div>
                    </div>
                ))
            )}
        </div>
    )
}