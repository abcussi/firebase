const functions = require("firebase-functions");
const express = require("express")
const app = express();
const Router = require("./routes/api")

app.get("/",(req,res)=>{
res.send("hola mundo angel")
})

app.use("/api",Router)

app.listen(3000,()=>{
    console.log("the server is runing on port 3000")
})

exports.app = functions.https.onRequest(app);