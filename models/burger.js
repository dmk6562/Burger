// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectall("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(burger_name, callback){
    orm.insertOne(burger_name, function(res){
        callback(res);
    });
},

updateOne: function(burger_id, callback){
    orm.updateOne(burger_id, function(res){
        callback(res);
    });
}

};

// Export the database functions for the controller
module.exports = burger;