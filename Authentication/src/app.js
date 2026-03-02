const express = require('express');
const authRoute=require('./routes/auth.routes'); 
const cokkieParser=require('cookie-parser');

const app=express();
app.use(express.json())
app.use(cokkieParser());

app.use("/api/auth",authRoute);

module.exports  = app