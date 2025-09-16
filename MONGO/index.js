const mongoose = require('mongoose');


main().then((res) => {
  console.log("Connection Succesful");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
})

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "Sarthak",
//   email: "sarthak@gmail.com",
//   age: 22,
// });
// user1.save(); //Async function

// const user2 = new User({
//   name: "Ssksham",
//   email: "saksham@gmail.com",
//   age: 21,
// });
// user2.save().then((res) => {
//   console.log(res);
// }).catch(err => {
//   console.log(err)
// })


// User.insertMany([
//   {
//     name: "Manish",
//     email: "manish@yahoo.com",
//     age: 24
//   },
//   {
//     name: "Kavi",
//     email: "Kavi@gmail.com",
//     age: 23
//   },
//   {
//     name: "Sarav",
//     email: "Sarav@yahoo.com",
//     age: 20
//   }
// ]).then((res) => {
//   console.log(res)
// });

User.find({ age: { $gt: 22} }).then((data) => {
  console.log(data[0].name)
}).catch((err) => {
  console.log(err)
})