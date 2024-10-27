const express=require('express');
const app=express();
const db=require('./db');

// Require Dotenv file

require('dotenv').config();

// Body-Parser is a Middleware which can conver the 
// form Data to Json data

// The data should be Store in after process
// req.body  

const bodyParser=require('body-parser');
app.use(bodyParser.json());

// Endpoint 

app.get('/',(req,res)=>{
    res.send('Welcome To my restorent')
})

// Import the Routes file

const PersonRouter=require('./routes/PersonRoutes');
const MenusRoutes=require('./routes/MenusRoutes');

// Use the Routes

app.use('/Persons',PersonRouter);
app.use('/Menus',MenusRoutes);

// Node Port

const Port=process.env.Port || 2500
app.listen(Port, () => {
    console.log(`Listening on port ${Port}`);
});