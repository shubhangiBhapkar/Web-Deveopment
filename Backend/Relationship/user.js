const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
  console.log("Connection successful!");
}

main().catch(err => console.log(err));

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      
      _id:false,
      location: String,
      city: String
    }
  ]
});

// Correcting the model declaration
const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "Tony",
    addresses: [
      {
        location: "2B21 bakery, london", // Fixed typo here
        city: "newYork"
      }
    ]
  });

  // Add another address
  user1.addresses.push({ location: "12C high colony", city: "los angeles" });

  // Save the user to the database
  let result = await user1.save();
  console.log(result);
};

// Call the function to add users
addUsers();
