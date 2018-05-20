//Dependencies
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
  res.render('../views/index');
});

// Index Page (displays all burgers)
router.get('../views/index', function (req, res) {
  burger.selectAll(function(data) {
      var hbsObject = { burgers: data };

      console.log(hbsObject);
      res.render('../views/index', hbsObject);
  });
});


// router.post("/", function(req, res) {
//   burgers.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function() {
//     res.redirect("/");
//   });
// });

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   console.log("condition", condition);
//   burgers.update({devoured : req.body.devoured}, condition, function() {
//     res.redirect("/");
//   });
// });
//Creates a new burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
      res.redirect('../views/index');
  });
});


//Devours a Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
      res.redirect('../views/index');
  });
});

//Export routes for server.js to use.
module.exports = router;







