const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
app.set("view engine","ejs");
app.set("views","views");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
// app.use((req,res,next)=>{
// console.log("i am middleware one");
// next();
// })

// app.use((req,res,next)=>{
//     console.log("i am middleware two");
//     next();
//     })
const userroute = require("./routes/user");
app.use(userroute);//middleware create pay ya tay
const adminRoute = require("./routes/admin");
app.use("/admin",adminRoute);
app.listen(8090);