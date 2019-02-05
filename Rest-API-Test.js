#Run the below command in node console to install express
#npm install express --save

var express = require("express");
var app = express();
app.listen(8080, () => {
 console.log("Server running on port 8080");
});

app.get("/test", (req, res, next) => {
 console.log("In test :: Server running on port 8080");
 res.json(["Sibsankar","Bera","Jagdish","Mayra","Aditya"]);
});

app.get("/testOne", (req, res, next) => {
  console.log("In testOne :: Server running on port 8080");
  res.write('Testing the restful webservices'); //write a response to the client
  res.end();
});

app.get("/testTwo", (req, res, next) => {
 console.log("In testTwo :: Server running on port 8080");
 res.json(["Sibsankar","Bera"]);
});