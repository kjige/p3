const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const Article = require("./model");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./build"));
app.use(cors());

// mongodb://admin:reactrocks@ds023593.mlab.com:23593/heroku_pg676kmk");
mongoose.connect("mongodb://localhost/p3", function(err){
  if (err) {
    console.log("Connection Failed!", err);
  } 
  
  else {
    console.log("Connection Successful!");
      db = mongoose.connection;
    }
});

app.get("/api/save", function(req, res) {
  Article.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

app.post("/api/save", function(req, res) {
  var newArticle = new Article(req.body);
  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.post("/api/delete/", function(req, res) {
  console.log("REQ", req.body);
  Article.find({ _id: req.body._id }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send('deleted');
    }
  });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
