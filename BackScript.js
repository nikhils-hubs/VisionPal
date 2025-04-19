const express = require('express');
const path = require('path');
const app= express();

app.use(express.static(__dirname));

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"login.html"))
});
app.get("/accessGrant",function(req, res){
    res.sendFile(path.join(__dirname,"acessGrant.html"))
});
app.get("/main",function(req, res){
    res.sendFile(path.join(__dirname,"index.html"))
});
app.listen(3000,()=>{
    console.log("Server runningt https://localhost:3000");
});