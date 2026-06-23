import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          🔥 FlowTracker
        </h1>

        <p className="mt-4 text-base md:text-lg text-zinc-400">
          Track user sessions, clicks, page views, and user journeys in real time.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="border border-zinc-700 rounded-xl p-6 bg-zinc-900 hover:border-orange-400 hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-xl font-bold">📊 Sessions</h2>
            <p>View tracked user sessions and total event counts.</p>
          </div>
          <div className="border border-zinc-700 rounded-xl p-6 bg-zinc-900 hover:border-orange-400 hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-xl font-bold">⏱️ User Journey</h2>
            <p>Follow the exact sequence of user actions and events.</p>
          </div>
          <div className="border border-zinc-700 rounded-xl p-6 bg-zinc-900 hover:border-orange-400 hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-xl font-bold">🔥 Heatmaps</h2>
            <p>Visualize user click activity across tracked pages.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="border border-zinc-700 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="text-zinc-400">Tracked Events</p>
          </div>
          <div className="border border-zinc-700 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold">4+</h3>
            <p className="text-zinc-400">Tracked URLs</p>
          </div>
          <div className="border border-zinc-700 rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold">3</h3>
            <p className="text-zinc-400">Analytics Views</p>
          </div>
        </div>

      </div>
    </>
  );
}
