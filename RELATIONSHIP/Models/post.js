const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection succesful "))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}
const userSchema = new Schema({
 username:String,
 email:String 

});

const postSchema=new Schema({
  content:String,
  likes:Number,
  user:{
    type:Schema.Types.ObjectId,
    ref: "User"
  }
})

const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

const addData = async () =>{
  let user = await User.findOne({username:"SarthakSharma"});


   let post2 = new Post ({
    content:"Bye Bye :)",
    likes:58,
   });

   
   post2.user=user;
   await post2 .save()
}

addData();
