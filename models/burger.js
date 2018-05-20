// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  insertOne: function(col, vals, cb){
    orm.insertOne('burgers', col, vals, function(res){
        cb(res);
    });
},

updateOne: function(objColsVals, condition, cb){
    orm.updateOne('burgers', objColsVals, condition, function(res){
        cb(res);
    });
}

};

// Export 
module.exports = burger;

