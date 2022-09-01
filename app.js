let express = require("express");
let path = require("path");
let methodOverride = require("method-override");

let app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_method"));

app.listen(process.env.PORT || 3000, ()=>{console.log("servidor corriendo")});

//app.get("/", (req,res) => {res.send("funciona")});