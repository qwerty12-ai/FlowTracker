"use client";
import { useState, useEffect } from "react";
import Heatmap from "./Heatmap";
import UrlSelector from "./UrlSelector";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/events";

export default function HeatmapClient({ urls, initialClicks }) {
  const [selectedUrl, setSelectedUrl] = useState(urls[0] || "");
  const [clicks, setClicks] = useState(initialClicks);

  useEffect(() => {
    const fetchClicks = async () => {
      try {
        const response = await fetch(
          `${API_URL}/heatmap?url=${encodeURIComponent(selectedUrl)}`
        );
        if (!response.ok) {
          console.error(
            "heatmap fetch failed:",
            response.status,
            response.statusText
          );
          setClicks([]);
          return;
        }
        const data = await response.json();
        setClicks(data);
      } catch (error) {
        console.error("heatmap fetch error:", error);
        setClicks([]);
      }
    };
    if (selectedUrl) {
      fetchClicks();
    }
  }, [selectedUrl]);

  return (
    <>
      <p className="text-sm text-zinc-400 mb-2">Select tracked page</p>

      <div className="mb-6">
        <UrlSelector urls={urls} selectedUrl={selectedUrl} setSelectedUrl={setSelectedUrl} />
      </div>

      <Heatmap clicks={clicks} />
    </>
  );
}