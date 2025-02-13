const express = require(express);
const router = express.Router()
const Data = require('./model')


router.get("/", () => {

    Data.find().then(() => {
        console.log("DATA IS AFICHER ");
    }).catch(() => {
        console.log("DATA IS NOT AFICHER");
    })
})

router.post('/',async (req, res)=>{
    const  {firstName,lastNamell,email,phone,message}=req.body;
    const new_tasks = new Data ({
        firstName:req.body.firstName,
        lastNamell:req.body.lastNamell,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    }).then(()=>{
        console.log("data insertion ")
    }).catch(()=>{
        console.log(" Data is not insertion")
    })
    await new_tasks.save()
})
module.exports = router