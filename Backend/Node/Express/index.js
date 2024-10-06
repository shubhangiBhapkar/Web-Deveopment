const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  //query string
  app.get('/search',(req,res)=>{
    let {q}=req.query;
    console.log('successfully')
    // console.log(req.query)
     res.send(`query for search result ${q}`);
  })

  
//path_parameters
  // app.get('/',(req,res)=>{
  //   res.send('hi, I am  root')
  // })
  // app.get('/:username/:id',(req,res)=>{
  //   console.log(req.params);
  //   res.send("WELCOME TO YOUR ACCOUNT!!")
    // let { username,id}=req.params;
    // res.send('This account belongs to @ $ {username}');
  // })


//app.get method:-
// app.get('/',(req,res)=>{
//   res.send('hi, I am  root')
// })
// app.get('/search',(req,res)=>{
//   res.send('hi, I am  search page')
// })
// app.get('/help',(req,res)=>{
//   res.send('hi, I am  help page')
// })
// app.get('*',(req,res)=>{
//   res.send('THik se enter kr na route,ye nhi he define kiye huye routes me !!')
// })


//app.post method:-
// app.post('/search',(req,res)=>{
//   app.send('<h1>SEARCH PAGE</h1>');
// })


//app.use method:- 
// app.use((req,res)=>{
//   console.log('requerst receive');
//   //console.log('Request ${req}');
//   res.send("<h1 >welcome</h1><ul><li>apple</li><li>Banana</li><li>strawberry</li>");
// });

