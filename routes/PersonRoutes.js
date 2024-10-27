const express=require('express');
const mongoose=require('mongoose');
const routes =express.Router();
const Persons=require('./../models/Persons')

// Get request

routes.get('/',async(req,res)=>{
    try{
        const response=await Persons.find();
        if(!response){
            res.status(404).json({error:'Person not found'});
        }
        else{
            console.log('Data Fetch');
            res.status(200).json(response)
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

// // Post request

routes.post('/',async(req,res)=>{
    try{
        const body=req.body;
        const newperson= new Persons(body);

        const response=await newperson.save();
        if(!response){
            res.status(404).json({error:'Internal Server Error'})
        }
        else{
            console.log('Data Seve');
            res.status(200).json(response);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

// Params 

routes.get('/:WorkType',async(req,res)=>{
    try{
        const workType= req.params.WorkType;
        if(workType=='waiter'||workType=='chef'||workType=='manager'){
            const response= await Persons.find({work:workType});
            if(!response){
                res.status(404).json({error:'Data Not found'});
            }
            else{
                console.log('Data fetch');
               res.status(200).json(response);
            }
        }
    }
    catch(err){
        console.log(err);  
        res.status(500).json({error:'Internal Server Error'})
    }
})

// Update request 

routes.put('/:id',async(req,res)=>{
    try{
        const PersonsId=req.params.id;
        const UpdatedPersonsId=req.body;
        const response= await Persons.findByIdAndUpdate(PersonsId,UpdatedPersonsId,{
            new:true,
            runValidators:true
        })
        if(!response){
            res.status(404).json({error:'Invalid id'});
        }
        else{
            res.status(200).json(response)
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})

// Delete request

routes.delete('/:id',async(req,res)=>{
    try{
        const DeleteId=req.params.id;
        const response=await Persons.findByIdAndDelete(DeleteId);
        if(!response){
            console.log('invalid id');
        }
        else{
            console.log('Deta Delete');
            res.status(200).json({message:'person delete'})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'}); 
    }
})
module.exports=routes;