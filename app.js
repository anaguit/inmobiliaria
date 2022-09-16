const express = require("express");
const path = require("path");
require('dotenv').config();
const methodOverride = require("method-override");

let app = express();

const PORT = process.env.PORT || 4000

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));

app.listen(process.env.PORT, ()=>{console.log(`servidor corriendo ${PORT}`)});

app.get("/", (req,res) => {res.send("funciona")});