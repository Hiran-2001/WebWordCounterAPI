const express = require('express');
const app = express()
const cors = require('cors');
const countRoutes = require("./routes/count.route");
const { connectToMongo } = require('./config/db');
require("dotenv").config()
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT || 5000
connectToMongo()

app.use("/api/",countRoutes)


app.listen(PORT,()=>{
    console.log(`app is running successfully`);
})