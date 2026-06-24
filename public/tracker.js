(function () {
    const API_URL = window.location.hostname === "localhost" ? "http://localhost:5000/api/events" : "https://flowtracker-backend.onrender.com/api/events"
    let sessionId = localStorage.getItem("flowtracker_session")

    if (!sessionId) {
        sessionId = "session_" + Math.random().toString(36).substring(2) + Date.now();
        localStorage.setItem("flowtracker_session", sessionId)
    }

    const sendEvent = async (eventData) => {
        try {
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData)
            })
        } catch (error) {
            console.error("FlowTracker Error: ", error)
        }
    }

    sendEvent({
        session_id: sessionId,
        event_type: "page_view",
        url: window.location.href,
        timestamp: new Date()
    })

    document.addEventListener("click", (event) => {
        sendEvent({
            session_id: sessionId,
            event_type: "click",
            url: window.location.href,
            timestamp: new Date(),
            x: (event.clientX / window.innerWidth) * 100,
            y: (event.clientY / window.innerHeight) * 100
        })
    })
})()