const mongoose=require ('mongoose');

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    work:{
        type:String,
        enum:['waiter','chef','manager'],
        require:true
    },
    Number:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    salary:{
        type:String,
        require:true
    }
});

const Persons=mongoose.model('Persons',personSchema)
module.exports=Persons;