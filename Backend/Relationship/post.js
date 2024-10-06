const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
  console.log("Connection successful!");
}

main().catch(err => console.log(err));

const userSchema = new Schema({
  username: String,
  email:String
});

const postSchema = new Schema({
    content:String,
    like:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
});

const user=mongoose.model("user",userSchema);
const post=mongoose.model("post",postSchema);

// let addData=async()=>{
    // const user1=new user({
    //     username:"shubhi",
    //     email:"shub@123gmail.com"
    // })

    const addData=async()=>{
    let user1=await user.findOne({username:"shubhi"});

    const post2=new post({
        content:"Second post ",
        like:75
    });

    post2.user=user1;

    // await user1.save();
    await post2.save();
};

const getData = async ()=>
    {
        let result= await post.findOne({}).populate("user","username");
        console.log(result);
    }

// addData();
getData();