const { v4: uuidv4 } = require('uuid');
const express=require('express')
const app=express()
const port=8080;
const path=require("path")

app.use(express.urlencoded({ extended: true }));//parse the input for node js uderstanding
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));//setting path
app.use(express.static(path.join(__dirname, 'public')));

let posts=[
    {   id:uuidv4(),
        username:"shubhangi_7620",
        content:"Everything will be ok"
    },
    {   id:uuidv4(),
        username:"shubham4545",
        content:"This is my first post"
    },
    {
         id:uuidv4(),
        username:"pran_20",
        content:"Techno plz play resident evil 5"

    }
];

app.get('/post', (req, res) => {
    res.render('index.ejs', {posts });
  });

  app.get("/post/new",(req,res)=>{
    res.render('new.ejs')
  })

  app.post("/post",(req,res)=>{
    let { username,content }=req.body;
    let id=uuidv4();
    posts.push({ id,username,content })
    console.log(req.body)
    res.redirect('/post');
  })

  app.get("/post/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let post=posts.find((p)=>id === p.id)
    
    res.render("show",{post})
  })
  
  app.listen(port, () => {
    console.log(`listening on port : ${port}`);
  });