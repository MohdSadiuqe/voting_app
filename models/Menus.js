const mongoose=require('mongoose');

const MenusSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    taste:{
        type:String,
        enum:['spicy','sour','sweet'],
        require:true
    },
    is_drink:{
        type:Boolean,
        require:true
    },
    ingredients:{
        type:String,
    },
    num_sales:{
        type:Number,
    }
})

const Menus=new mongoose.model('Menus',MenusSchema);
module.exports=Menus;