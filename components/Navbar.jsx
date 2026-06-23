import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur border-b border-zinc-800 text-white px-4 md:px-8 py-4 flex justify-between items-center">
            <span className="font-bold text-lg md:text-xl flex items-center gap-2 whitespace-nowrap"> 🔥 FlowTracker</span>
            <div className="flex items-center gap-2 md:gap-8 font-medium text-xs md:text-base">
                <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
                <Link href="/sessions" className="hover:text-orange-400 transition-colors">Sessions</Link>
                <Link href="/heatmap" className="hover:text-orange-400 transition-colors">Heatmap</Link>
                <Link href="/demo" className="hover:text-orange-400 transition-colors">Demo</Link>
            </div>
            
        </nav>
    )
}