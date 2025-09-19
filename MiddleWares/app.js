const express = require("express");
const app = express();

// app.use((req,res,next)=>{
//  console.log ("Hii I am Middleware")
//  next();
// })

const TokenCheck = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    res.send("ACCESS DENIED")
  }

};
app.get("/api", TokenCheck, (req, res) => {
  res.send("data");
})

app.get("/", (req, res) => {
  res.send("Hi, I am Sarthak")
})
app.get("/Random", (req, res) => {
  res.status(404).send("Hi, I am Nanu")
})

app.get("/err",(req,res)=>{
  abcd=abcd;
})

app.use((err,req,res,next)=>{
  console.log("-----ERROR-----");
  next(err);
})

app.use((req, res) => {
  res.send("Page not found");
})
// app.use((req,res,next)=>{
//   req.time= new Date(Date.now()).toString();
//   console.log(req.method,req.hostname,req.path,req.time);
//   next();
// })

app.listen(8080, () => {
  console.log("server listening to port 880");
})