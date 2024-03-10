const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.post('/',async (req, res)=>{
    try{
        const data = req.body;
        const savedperson= await new Person(data).save();
        console.log('data saved...');
        res.status(200).json(savedperson);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error: 'internal server error'});
    }
 })
router.get('/',async (req,res)=>{
     try{
         const data = await Person.find();
         console.log(" Here is all data available.....");
         res.status(200).json(data);
     }
     catch(error){
         console.log(error);
         res.status(500).json({error:"internal server error"});
     }
 })
 router.get('/:worktype',async (req,res)=>{
     try{
         const worktype=req.params.worktype;
         if(worktype=='chef' || worktype=='manager' || worktype == 'waiter'){
             const persons = await Person.find({work:worktype});
             res.status(200).json(persons);
         }
         else{
             res.status(404).json({error:'Invalid work type',})
         }
     }
     catch(error){
         console.log(error);
         res.status(500).json({error:"internal server error"});
     }
 })
 router.put('/:id',async(req,res)=>{
    try{
            const personId = req.params.id;
            const data = req.body;
            const updateddata = await Person.findByIdAndUpdate(personId,data,{
                new:true,
            });
            if(!updateddata){
                console.log("data not found.......");
                return res.status(404).json({
                    "error":"person not found",
                });
                
            }
            console.log('data updated');
            res.status(500).json(updateddata);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"internal server error"});
    }
 })
 router.delete('/:id',async(req,res)=>{
    try{
            const personId = req.params.id;
            const data = await Person.findByIdAndDelete(personId);
        if(!data){
           return res.status(404).json({error: 'person not found'});
        }
        console.log("data deleted successfully");
        res.status(200).json({message:'person deleted successfully..'});
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"internal server error"});
    }
 })

module.exports = router;