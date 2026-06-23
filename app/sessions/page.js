import Navbar from "@/components/Navbar";
import SessionTable from "@/components/SessionTable";
import {getSessions} from "../../services/api"

export default async function SessionsPage() {
    const sessions = await getSessions();

    return (
        <>
            <Navbar />

            <div className="p-4 md:p-8 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">
                    Sessions
                </h1>
                <SessionTable sessions={sessions} />
            </div>
        </>
    )
}