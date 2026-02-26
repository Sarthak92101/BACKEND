const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

// app.use((req,res,next)=>{
//  console.log ("Hii I am Middleware")
//  next();
// })

const TokenCheck = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    throw new ExpressError(401, "ACCESS DENIED")
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

app.get("/err", (req, res) => {
  abcd = abcd;
})

app.get("/admin",(req,res)=>{
  throw new ExpressError(401,"Some new kind of ERROR")
})

app.use((err, req, res, next) => {
  let { status = 500, message = "SOME ERROR" } = err;
  res.status(status).send(message);
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