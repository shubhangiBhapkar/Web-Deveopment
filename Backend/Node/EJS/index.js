const express = require('express')
const path=require('path');
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  // app.set('views',path.join(__dirname,"/views"));

app.set('view engine','ejs');

  app.get('/',(req,res)=>{
   console.log('successfully')
     res.render(`home.ejs`);
  })

  app.get('/rolldice',(req,res)=>{
      let num=Math.floor(Math.random()*6)+1;
      // res.render(`rolldice.ejs`,{num:dicval});
      // res.render('rolldice.ejs',{num:num})
      res.render('rolldice.ejs',{num})
   })

  //  app.get('/ig/:username',(req,res)=>{
  //   let followers=['tony','steve','bruce','thor'];
  //   let {username}=req.params;
  //   res.render('instagram.ejs',{username,followers})
  //  })


  //instagram page with EJS
  app.get('/ig/:username',(req,res)=>{
    const {username}=req.params;
    const instadata=require("./data.json");
    //console.log(instadata);
    let data=instadata[username]
   res.render('instagrampage.ejs',{data})
   console.log(data)

  })

  app.get('/about',(req,res)=>{
    
    console.log('successfully')
      res.render(`about`);
   })