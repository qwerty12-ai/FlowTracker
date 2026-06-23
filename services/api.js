const API_URL = "http://localhost:5000/api/events";

export const getSessions = async () => {
    const response = await fetch(`${API_URL}/sessions`)
    if (!response.ok) {
        console.error("get sessions request failed:", response.status, response.statusText)
        return []
    }
    return response.json();
}

export const getSessionEvents = async (sessionId) => {
    const response = await fetch(`${API_URL}/session/${sessionId}`)
    if (!response.ok) {
        console.error("get session events request failed:", response.status, response.statusText)
        return []
    }
    return response.json();
}

export const getHeatmapData = async(url) => {
    const response = await fetch(`${API_URL}/heatmap?url=${encodeURIComponent(url)}`)
    if (!response.ok) {
        console.error("get heatmap data request failed:", response.status, response.statusText)
        return []
    }
    return response.json();
}

export const getUrls = async () => {
    const response = await fetch(`${API_URL}/urls`)
    if (!response.ok) {
        console.error("get urls request failed:", response.status, response.statusText)
        return []
    }
    return response.json()
}