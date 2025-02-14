const express = require("express");
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
    const  {firstName,lastName,email,phone,message}=req.body;
    console.log(req.body)
    const contact = new Data ({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    })
    const savedContact = await contact.save();
    console.log('Contact sauvegardée :', savedContact);
    res.status(201).json(savedContact);
    
})
module.exports = router