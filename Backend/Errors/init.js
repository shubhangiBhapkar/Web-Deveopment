const mongoose=require("mongoose");
const chat = require('./models/chats.js');

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) =>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsapp');
}

let allChats=[
    {
        from:"shub",
        to:"priya",
        msg:"i miss you",
        created_at: new Date()

    },
    {
        
        from:"tony",
        to:"peter",
        msg:"love you 3000",
        created_at: new Date()

    },
    {
        
        from:"panthor",
        to:"captain",
        msg:"take this shild",
        created_at: new Date()

    },
    {
        from:"thor",
        to:"rocket",
        msg:"Bring me Thanos",
        created_at: new Date()

    },
    {
        from:"captain",
        to:"tony",
        msg:"I can do this all day",
        created_at: new Date()

    }
];

chat.insertMany(allChats);