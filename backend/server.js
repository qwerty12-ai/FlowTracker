const express = require("express");
const cors = require("cors");
const path = require("path")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config({path: path.join(__dirname, ".env")});
connectDB();

const app = express();

const allowedOrigins = [
    "http://localhost:3000",
    process.env.FRONTEND_URL,
].filter(Boolean)

app.use(express.json())
app.use(cors({origin: allowedOrigins, credentials: true}))
app.use("/api/events", require("./routes/eventRoutes"))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})