const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection succesful "))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

const userSchema = new Schema({
  username: String,
  addresses: [
    {
      _id:false,
      location: String,
      city: String
    }
  ],
})

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "Sarthak",
    addresses: [
      {
        location: "G 71",
        city: "New Delhi"
      }
    ]
  });

  user1.addresses.push({location:"C 72", city:"Delhi"});
  let result= await user1.save();
  console.log(result);
  
}
addUsers();