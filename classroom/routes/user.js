const express = require("express");
const router = express.Router();

//index - users
router.get("/",(req,res)=>{
    res.send("get for user");
});

//Show - users
router.get("/:id",(req,res)=>{
    res.send("get for users id ");
});

//Post - users
router.post("/",(req,res)=>{
    res.send("post for users");
});

//Post - users
router.delete("/",(req,res)=>{
    res.send("Delete for users id");
});
module.exports = router;