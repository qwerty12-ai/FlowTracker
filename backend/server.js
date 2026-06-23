const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config();
connectDB();

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/events", require("./routes/eventRoutes"))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})