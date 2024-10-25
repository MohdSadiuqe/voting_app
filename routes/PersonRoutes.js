const express=require('express');
const routes=express.Router();
const Persons=require('./../models/Persons');

// Post person data

routes.post('/',async(req,res)=>{
    try{
       const data=req.body;
       const newPerson=new Persons(data);

       const respose=await newPerson.save();
       console.log('Data save');
       res.status(200).json(respose)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

// Get person data

routes.get('/',async(req,res)=>{
    try{
        const respose=await Persons.find();
        console.log('Data fetch');
        res.status(200).json(respose);
    }
    catch(err){
        console.log('err');
        res.status(404).json({error:'Internal server error'})
    }
})

// Parametarized API

routes.get('/:workType',async(req,res)=>{
    try{
        const worktype=req.params.workType;
        if(worktype=='chef' || worktype=='waiter' || worktype=='manager'){
           const respose= await Persons.find({work:worktype});
           res.status(200).json(respose);
        }
        else{
            res.status(404).json({error:'invald Api'})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:' internal server issue'});
    }  
})

routes.put('/:id',async(req,res)=>{
    try{
        const PersonsId= req.params.id;
        const UpdatedPersonId=req.body;
    
        const respose=await Persons.findByIdAndUpdate(PersonsId,UpdatedPersonId,{
            new:true,
            runValidators:true
        })
        if(!respose){
            res.status(404).json({error:'person not found'})
        }
        console.log('Data update');
        res.status(200).json(respose);
    }
    catch(err){
        console.log(err);
        res.status(404).json({error:'internal server error'});
    }
})

routes.delete('/:id',async(req,res)=>{
    try{
        const PersonsId=req.params.id;
        const response= await Persons.findByIdAndDelete(PersonsId);
        if(!response){
            res.status(404).json({err:'internal server err'});
        }
        console.log('Data Delete');
        res.status(300).json(response)  
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})
module.exports=routes;

