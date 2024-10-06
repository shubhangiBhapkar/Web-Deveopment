const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model('Book', bookSchema);

const book1 = new Book({
  title: "Geeta",
  author: "Krishna",
  price: 1000,
});

book1.save();