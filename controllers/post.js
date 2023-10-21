// const { post, post } = require("../route/admin");

const post = [];

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
    res.render("home",{postArr: post});
    console.log(post);
};
exports.getpost = (req,res)=>{
const postId =req.params.post_Id;
console.log(postId);
res.render("detail");
};
