
const express=require("express");
const app=express();
const chat = require('./models/chats.js');
const mongoose=require("mongoose");
const ExpressError=require("./ExpressError")

const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extend:true}))

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) =>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsapp');
}

app.get("/",(req,res)=>{
    res.send("Working");
})
//index route here all chats will present
app.get("/chats", async(req,res)=>{
      let chatting =await chat.find();
      
      console.log(chatting);
      res.render("chatIndex.ejs",{chatting})   
})
//adding new chats
app.get("/chats/new",(req,res)=>{
    
    res.render("newChat.ejs")
})


app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;
    let newchat=new chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new date()
    });
    //console.log(newchat);
    newchat.save().then(res=>{console.log("added new chat")}).catch(err=>{console.log(err)});
    res.redirect("/chats");
});

//edit chat
app.get("/chats/:id/edit",(req,res)=>{
    let {id}=req.params;
    let ChatToEdit=chat.findById(id);
    if(!chat){
        throw new ExpressError(404,"chat not found");
      }
    res.render("edit.ejs",{ChatToEdit});
})

// Error handling middleware
app.use((err,req,res,next)=>{
    let {status=500,message="some error has been occured"}=err;
    res.status(status).send(message);
})

app.listen(8080, () => {
    console.log("App is running on port 8080");
});
