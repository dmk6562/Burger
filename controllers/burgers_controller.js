//Dependencies
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// Index Page (displays all burgers)
router.get('/', function (req, res) {
  burger.selectAll(function(data) {
      var hbsObject = { burgers: data };

      console.log(hbsObject);
      res.render('index', hbsObject);
  });
});

//Creates a new burger
router.post("/", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function() {
    res.redirect("/");
  });
});

//Devours a Burger
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne({devoured : req.body.devoured}, condition, function() {
    res.redirect("/");
  });
});



//Export routes 
module.exports = router;







