const express=require("express");
const app=express();
// const cookieParser=require("cookie-parser");
const session=require("express-session");
const path=require("path");
const flash=require("connect-flash");

app.use(flash());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOptions={
    secret:"mysupersecretecode",
    resave: false,
    saveUninitialized: true
};

app.use(session(sessionOptions));

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    console.log(name);
    res.redirect("/hello");
    // res.send(req.session.name);
});

app.get("/hello",(req,res)=>{
    // res.send(`Hello,${req.session.name}`);
    res.render("page.ejs",{name:req.session.name,msg:req.flash("success")});
});


// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1;
//     }
    // res.send("you send request {req.session.count} times");
// });

// app.get("/test",(req,res)=>{
//     res.send("test successfull!");
// });

// app.use(cookieParser());

// app.get("/cookies",(req,res)=>{
//     res.cookie("greet","namaste");
//     res.cookie("madeIn","India");
//     res.send("sent you cookie");
// })

// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("Hi i am root!");
// });

app.listen(3000, () => {
    console.log("Listening on port 3000");
});