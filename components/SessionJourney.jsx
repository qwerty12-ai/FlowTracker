"use client"

export default function SessionJourney({events}) {
    return (
        <div className="space-y-2 md:space-y-3">
            {events.map((event) => (
                <div className="border border-zinc-700 bg-zinc-900 rounded-xl p-3 md:p-4 hover:bg-orange-400 transition-all" key={event._id}>
                    <p className="font-bold text-sm md:text-base"><strong>{event.event_type}</strong></p>
                    <p className="text-xs md:text-sm break-all text-zinc-300">{event.url}</p>
                    <p className="text-xs text-zinc-400">{new Date(event.timestamp).toLocaleString()}</p>
                </div>
            ))}
        </div>
    )
}