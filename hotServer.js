var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT||3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var currentRes = [
    {
      name: "",
      email: "",
      phone: "",      
    }
];
var waitList = [
    {
        name: "",
        email: "",
        phone: "",  
    }
];



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });