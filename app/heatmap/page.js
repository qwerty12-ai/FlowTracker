import HeatmapClient from "@/components/HeatmapClient";
import Navbar from "@/components/Navbar";
import { getHeatmapData, getUrls } from "@/services/api";

export default async function HeatmapPage() {
    const urls = await getUrls();

    const initialClicks = urls.length > 0 ? await getHeatmapData(urls[0]) : [];

    return (
        <>
            <Navbar />
            <div className="p-4 md:p-8 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">
                    Heatmap View
                </h1>
                <HeatmapClient urls={urls} initialClicks={initialClicks} ></HeatmapClient>
            </div>
        </>
    )
}