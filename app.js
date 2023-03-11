const express=require('express');
const app=express();
const path=require('path');

const staticPath=path.join(__dirname,'public');

app.use(express.static(staticPath))
app.get("/",(req,res)=>{
      res.send("Heee")
})

app.get("/about",(req,res)=>{
      res.send("About Page")
})

app.listen(4000,()=>{
      console.log("Listing ")
})