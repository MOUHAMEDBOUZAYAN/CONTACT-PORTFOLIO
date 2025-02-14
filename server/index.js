const express =require("express")
const App = express()
const mongoose =require("mongoose")
const bodyParser = require("body-parser");
const cors = require ("cors");
const router = require("./route");


App.use(bodyParser.json())
App.use(cors())


mongoose.connect("mongodb://localhost:27017/").then(()=>{
    console.log("data is connected with mongodbcompasse");
}).catch(()=>{
    console.log("data is not connected ");
})

App.use('/api', router);

const port = 5000 ;
App.listen(port,()=>{
    console.log(`server is Running avec sucsses IN ${port} `);
})
