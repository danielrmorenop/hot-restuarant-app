var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT||3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

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

  // Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page(home)
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
// Displays current tables

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
// Displays the "Book a table" page
app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});