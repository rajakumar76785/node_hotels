const express = require('express');
const router = express.Router();
const menuItem = require('../models/menuItem');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const savedmenuItem = await new menuItem(data).save();
        console.log('menu item saved.....');
        res.status(200).json(savedmenuItem);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error:"internal server error",
        })
    }
});
router.get('/',async(req,res)=>{
    try{
        const data = await menuItem.find();
        console.log("Here is all menu item available.........");
        res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
           error: "internal server error in data fetching......"
        });

    }
});
router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste == 'sweet' || taste == 'spicy' || taste == 'sour'){
             const menu = await menuItem.find({taste: taste});
            res.status(500).json(menu);
        }
        else{
            res.status(404).send("Invalid taste");
        }
        
    }
    catch(error){

    }
});
//comment added here
module.exports = router;