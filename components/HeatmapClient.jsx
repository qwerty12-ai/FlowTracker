"use client"

import { useState, useEffect } from "react";
import Heatmap from "./Heatmap";
import UrlSelector from "./UrlSelector";

export default function HeatmapClient({urls, initialClicks}) {
    const [selectedUrl, setSelectedUrl] = useState(urls[0] || "")
    const [clicks, setClicks] = useState(initialClicks)

    useEffect(() => {
        const fetchClicks = async () => {
            const response = await fetch(`http://localhost:5000/api/events/heatmap?url=${encodeURIComponent(selectedUrl)}`)
            const data = await response.json();
            setClicks(data)
        }
        if(selectedUrl) {
            fetchClicks()
        }
    }, [selectedUrl])

    return (
        <>

            <p className="text-sm text-zinc-400 mb-2">
                Select tracked page
            </p>

            <div className="mb-6">
                <UrlSelector urls={urls} selectedUrl={selectedUrl} setSelectedUrl={setSelectedUrl} />
            </div>

            <Heatmap clicks={clicks}></Heatmap>
        </>
    )
}