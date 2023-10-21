const express = require("express");
const route = express.Router();
const path = require("path");
// const {post} = require("./admin");
const postController = require("../controllers/post");

route.get("/" ,postController.homepage);

// route.get("/post" , (req,res)=>{
//     // res.sendFile("./views/homepage.html",{root:__dirname});
//     res.sendFile(path.join(__dirname,"..","views","postpage.html"));
// })
route.get("/post/:post_Id", postController.getpost);
module.exports =route;