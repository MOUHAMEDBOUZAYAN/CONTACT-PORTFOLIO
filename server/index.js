const express =require("express")
const App = express()
const mongoose =require("mongoose")
const bodyParser = require("body-parser");
const cors = require ("cors");
const router = require("./route");



app.use(bodyParser.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/").then(()=>{
    console.log("data is connected");
}).catch(()=>{
    console.log("data is not connected");
})
App.listen(5000,()=>{
    console.log("server is Running avec sucsses");
})
