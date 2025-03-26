const express = require("express");
const router = express.Router();

//posts
//index 
router.get("/",(req,res)=>{
    res.send("get for posts");
});

//Show 
router.get("/:id",(req,res)=>{
    res.send("get for posts id ");
});

//Post 
router.post("/",(req,res)=>{
    res.send("post for posts");
});

//Post 
router.delete("/",(req,res)=>{
    res.send("Delete for post id");
});
module.exports = router;