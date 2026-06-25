const express=require('express');
const app=express();
const userroutes=require('./routes/userroutes');
app.use(express.json());
app.use('/users',userroutes);
app.listen(3000,()=>{
    console.log("Server running");
});
