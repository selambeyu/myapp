const express=require('express');
const app=express();
const port=3000;


app.get('/',(req,res)=>{
    res.send("it is working well")
})

app.listen(port,'localhost',()=>{
    
        console.log("the app isn listen on port",`${port}`);
   
})