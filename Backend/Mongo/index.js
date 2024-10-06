const mongoose = require('mongoose');

main()
.then(()=>
    {console.log("connection sucessful")})
.catch((err)=>
    {console.log(err)})

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//Create schema
const Schema = mongoose.Schema;

const userSchema= new Schema({
    name:String,
    email:String,
    age:Number
})

//create Model
const User=mongoose.model("User",userSchema);
//const Employee=mongoose.model('Employee',userSchema);

//insert in doc
// const user1=new User({
//     name:'shub',
//     email:'shub@123gmail.com',
//     age:21
// });
//user1.save();

// const user2=new User({
//     name:'priya',
//     email:'priya@123gmail.com',
//     age:20
// });
// user2.save()
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)})


//****inserting many entries */
// User.insertMany([
//   {name:"tony",email:"tony@12gmail.com",age:21},
//   {name:"peter",email:"peter@12gmail.com",age:22},
//   {name:"bruce",email:"bruce@12gmail.com",age:25}
// ])
// .then((data)=>{
//     console.log(data);
// });

//*****find method */
// User.find().then((data)=>{
//     console.log(data)
// });


// User.find({age:{ $gte :24}}).then((data)=>{
//     console.log(data[0].name);
// })

// ****find one******
// User.findOne({name:'shub'}).then((data)=>{
//     console.log(data);
// });

// User.findOne({_id:"66b473794cdafa1c098d2eea"}).then((data)=>{
//     console.log(data)
// })

// User.findOne({name:'bruce'}).then((data)=>{
//     console.log(data);
// })

// *****Update method***
// User.updateOne({name:'shub'},{age:50}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.updateMany({name:'bruce'},{name:'thor'}).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err)
// })

// User.find().then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// ***findOneAndUpdate
// User.findOneAndUpdate({name:'shub'},{age:100},{new:true}).then((data)=>{
//     console.log(data)
// })

// User.findByIdAndUpdate({_id:'66b3250b694a45d889f01a33'},{name:'shubhangi'},{new:true}).then((data=>{
//     console.log(data);
// }))

// *******delete
// User.deleteOne({name:'priya'}).then((res)=>{
//     console.log(res);
// })

// User.deleteMany({name:'thor'}).then((res)=>{
//     console.log(res)
// })

User.findByIdAndDelete({_id:'66b5bd2683ca651bd1b920fd'},{new:true}).then((res)=>{
    console.log(res)
})