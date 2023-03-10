const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
      res.send("Welcome to Home page");
})

app.get('/about',(req,res)=>{
      res.send("Welcome to About page");
})

app.get('/contact',(req,res)=>{
      res.send("Welcome to Contact page");
})

app.get('/temp',(req,res)=>{
      res.send("Welcome to Temperature page");
})

app.listen(port,()=>{
      console.log(`Listening to the port on ${port}`);
})