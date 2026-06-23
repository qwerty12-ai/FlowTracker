const express = require("express")
const {receiveEvent, getSessions, getSessionEvents, getHeatmapData, getUrls} = require("../controllers/eventController")
const router = express.Router();

router.post("/", receiveEvent);
router.get("/sessions", getSessions);
router.get("/session/:sessionId", getSessionEvents);
router.get("/heatmap", getHeatmapData);
router.get("/urls", getUrls)

module.exports = router