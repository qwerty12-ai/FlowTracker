const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    session_id: {type: String, required: true},
    event_type: {type: String, enum: ["page_view", "click"], required: true},
    url: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
    x: {type: Number},
    y: {type: Number}
})

module.exports = mongoose.model("Event", eventSchema);