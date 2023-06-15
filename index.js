const express = require('express');
const app = express()
const cors = require('cors');
const countRoutes = require("./routes/count.route")

app.use(express.json())
app.use(cors());
app.use("/api/",countRoutes)
// app.get("/user",(req,res)=>{
// res.send("hello working")
// })

app.listen(5000,()=>{
    console.log(`app is running at port ${5000}`);
})