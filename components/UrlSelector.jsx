"use client"

export default function UrlSelector({urls, selectedUrl, setSelectedUrl}) {
    return (
        <select value={selectedUrl} onChange={(e) => setSelectedUrl(e.target.value)} className="w-full md:w-auto bg-zinc-800 text-white border border-zinc-600 px-4 py-2 rounded-lg min-w-[320px]">
            {urls.map((url) => (
                <option value={url} key={url}>
                    {url}
                </option>
            ))}
        </select>
    )
}