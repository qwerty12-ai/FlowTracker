import Navbar from "@/components/Navbar";
import SessionJourney from "@/components/SessionJourney";
import { getSessionEvents } from "@/services/api";

export default async function SessionDetails({params}) {
    const {id} = await params
    const events = await getSessionEvents(id)
    return (
        <>
            <Navbar />

            <div className="p-4 md:p-8">
                <h1 className="text-3xl font-bold mb-4">
                    User Journey
                </h1>
                <SessionJourney events={events} />
            </div>

        </>
    )
}