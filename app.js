const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv').config();

const app = express()

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

//middlewares

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes


app.use(require('./routes/todo'))
app.use(require('./routes/index'))
app.listen(3000, ()=> console.log("Server running on port 3000"));