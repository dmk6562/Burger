//Dependencies
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
  res.redirect('/index');
});

// Index Page (displays all burgers)
router.get('/index', function (req, res) {
  burger.all(function(data) {
      var hbsObject = { burgers: data };
      //console.log(hbsObject);
      res.render('index', hbsObject);
  });
});


//Creates a new burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
      res.redirect('/index');
  });
});


//Devours a Burger
router.post('/burger/eat/:id', function (req, res) {
  burger.updateOne(req.params.id, function() {
      res.redirect('/index');
  });
});

//Export routes for server.js to use.
module.exports = router;







