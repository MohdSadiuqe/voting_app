const express= require('express')
const mongoose=require('mongoose');
const routes=express.Router();
const Menus=require('./../models/Menus');

// Get Request

routes.get('/',async(req,res)=>{
    try{
        const response=await Menus.find();
        if(!response){
            res.status(404).json({error:'Data not found'})
        }
        else{
            console.log('Data fetch');
            res.status(200).json(response);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})

// Post Request

routes.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newMenus=new Menus(data);
    
        const response=await newMenus.save();
        if(!response){
            res.status(404).json({error:'Data not found'})
        }
        else{
            console.log('Data Insert');
            res.status(200).json(response);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

module.exports=routes;

// Params

routes.get('/:TasteType',async(req,res)=>{
    try{
        const TasteType=req.params.TasteType;
        if(TasteType=='sour' || TasteType=='spicy' || TasteType=='sweet'){
           const response=await Menus.find({taste:TasteType});
           if(!response){
              res.status(404).json({error:'TasteType not found'})
            }
            else{
                console.log('Data Found');
                res.status(200).json(response);
            }
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})  
    }
})

// Update Menus items

routes.put('/:id',async(req,res)=>{
    try{
        const MenusId=req.params.id;
        const UpdateMenuId= req.body;
    
        const response=await Menus.findByIdAndUpdate(MenusId,UpdateMenuId,{
            new:true,
            runValidators:true
        })
        if(!response){
            res.status(404).json({error:'Invalid id found'});
        }
        else{
            console.log('Data Updated');
            res.status(200).json(response);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

routes.delete('/:id',async(req,res)=>{
    try{
        const MenusId=req.params.id;
        const response=await Menus.findByIdAndDelete(MenusId);
        if(!response){
            res.status(404).json({error:'Invalid id Found'})   
        }
        else{
            console.log('Data Delete'); 
            res.status(200).json(response)
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server issue'});
    }
})

module.exports=routes;