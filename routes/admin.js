const { log } = require("console");
const express = require("express");
const Router = express.Router();
const path = require("path");
const postController = require("../controllers/post");
Router.post("/",postController.createPost);
Router.get("/createpost",postController.addpostpage);
module.exports = Router;
// const { title } = require("process");

// route.post("/",postController.createpost);
// route.get("/createpost",postController.renderCreatePage);
// module.exports ={adminroute: route};