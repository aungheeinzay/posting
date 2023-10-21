const db = require("../utils/database");
module.exports = class post{
    constructor(title,description,image_url){
this.title = title;
this.description=description;
this.image_url =image_url;
    }
    static getallpost(){
       return db.execute("SELECT * FROM post");
    }
    static getSinglePost(id){
        return db.execute("SELECT * FROM post WHERE post.id = ?", [id]);
    }
};
