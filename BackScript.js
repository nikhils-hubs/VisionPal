const express = require('express');
const path = require('path');
const app= express();

app.use(express.static("public"));

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"public","login.html"))
});
app.get("/main",function(req, res){
    res.sendFile(path.join(__dirname,"public","index.html"))
});
// app.get("/profile",function(req, res){
//     res.sendFile(path.join(__dirname,"public","login.html"))
// });
app.listen(3000,()=>{
    console.log("Server runningt https://localhost:3000");
});