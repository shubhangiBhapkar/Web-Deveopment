const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
  console.log("Connection successful!");
}

main().catch(err => console.log(err));

const orderSchema = new Schema({
  item: String,
  price: Number
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type:Schema.Types.ObjectId,
      ref:"Order"
    },
  ],
});

// Middleware
customerSchema.pre("findOneAndDelete",async()=>{
  console.log("pre Middleware");
});

customerSchema.post("findOneAndDelete",async(customer)=>{
  if(customer.orders.length){
    let res=await Order.deleteMany({_id:{$in:customer.orders}});
    console.log(res);
  }
  console.log("post Middleware");
});

const Order = mongoose.model("Order", orderSchema); // Corrected schema reference
const Customer = mongoose.model("Customer", customerSchema); // Corrected schema reference

// let addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "Shubhangi",
//   });

//   // Correcting async issue and typo in findOne
//   let order1 = await Order.findOne({ item: "poha" });
//   let order2 = await Order.findOne({ item: "vadapav" });

//   // Pushing orders to the customer's order array
//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);
// };

// Uncomment the following if you need to add sample orders
// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "samosa", price: 20 },
//     { item: "poha", price: 15 },
//     { item: "vadapav", price: 18 }
//   ]);
//   console.log(res);
// };
// addOrders();

// addCustomer();

//Function



const addCust=async()=>{
  let newCust  =new Customer({
    name:"priya"
  });

  let newOrder=new Order({
    item:"pizza",
    price:120
  });

  newCust.orders.push(newOrder);
  await newOrder.save();
  await newCust.save();
  console.log("Added new customer!");
}

const delCust=async()=>{
  let data=await Customer.findByIdAndDelete("67029e02dc7027b7c39646e6");
  console.log(data);
}

delCust();
// addCust();