//jshint esversion:6
const express = require("express");
const app = express();


//Route
//Root

app.get("/",function(req,res){
 res.sendFile(__dirname+"/index.html");



// res.send("<h1>Hi, Arsalan!</h1>");
});


app.get("/contact",function(req,res){
res.sendFile("contact.html");


  // res.send("<h1>Contact ME</h1>");
});




app.listen(3000,function(){
  console.log("Server started on port 3000");
});
