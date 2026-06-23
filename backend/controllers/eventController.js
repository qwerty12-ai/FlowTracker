const Event = require("../models/Event");

const receiveEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body)
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getSessions = async (req, res) => {
    try {
        const sessions = await Event.aggregate([{
            $group: {
                _id: "$session_id",
                event_count: { $sum: 1 }
            }
        }, {
            $sort: { event_count: -1 }
        }
        ])

        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getSessionEvents = async (req, res) => {
    try {
        const events = await Event.find({ session_id: req.params.sessionId }).sort({ timestamp: 1 })
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getHeatmapData = async (req, res) => {
    try {
        const clicks = await Event.find({ url: req.query.url, event_type: "click" }).select("x y -_id")
        res.status(200).json(clicks)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getUrls = async (req, res) => {
    try {
        const urls = await Event.distinct("url");
        const filteredUrls = urls.filter(url => !url.includes("tracker.js"))
        res.status(200).json(filteredUrls)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    receiveEvent,
    getSessions,
    getSessionEvents,
    getHeatmapData,
    getUrls
}