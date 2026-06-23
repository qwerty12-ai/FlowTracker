"use client"

import Link from "next/link"

export default function SessionTable({sessions}) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full border rounded-lg overflow-hidden shadow">
                <thead>
                    <tr>
                        <th className="border p-2 break-all">Session ID</th>
                        <th className="border p-2">Events</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map((session) => (
                        <tr key={session._id} className="hover:bg-zinc-800 transition">
                            <td className="border p-3">
                                <Link href={`/sessions/${session._id}`} className="text-blue-500">{session._id}</Link>
                            </td>
                            <td className="border p-2">{session.event_count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}