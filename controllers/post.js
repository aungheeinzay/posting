// const { post, post } = require("../route/admin");

const post = [];
const Posts= require("../models/posts");
exports.createPost =(req,res)=>{
    const {title,description} = req.body;
    console.log(`title is ${title} and description is ${description}`);
    post.push({
      id:Math.random(),
      title,
      description
    });
    res.redirect("/");
};
exports.addpostpage =(req,res)=>{
    res.render("addposts", {title : "post create ml"});
    };

exports.homepage = (req,res)=>{
    // res.sendFile("./views/homepage.html",{root:__dirname});
    // res.sendFile(path.join(__dirname,"..","views", "homepage.html"));
    Posts.getallpost().then(([rows])=>{
        console.log(rows)
        res.render("home", {title: "helloword",postArr: rows});
    }).catch(err=>console.log(err));
   
    console.log(post);
};
exports.getpost = (req,res)=>{
const postId =req.params.post_Id;
console.log(postId);
Posts.getSinglePost(postId).then(([row])=> {
res.render("detail", {post: row});
})
.catch()

};
