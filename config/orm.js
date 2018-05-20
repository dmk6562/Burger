var connection = require('./connection.js');


// selectAll method selecting all data from the db
var orm = {
    selectAll: function (cb) {
        var queryString = 'SELECT * FROM burgers';

        connection.query(queryString, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },

// insertOne method  
    insertOne: function (burger_name, cb) {
        connection.query('INSERT INTO burgers SET ?', 
        { burger_name: burger_name,
          devoured: false
        }, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },

// updateOne method
    updateOne: function(burger_id, cb) {
        // SQL query string: UPDATE table SET chosen-column = value WHERE condition;
        connection.query('UPDATE burgers SET ? WHERE ?', 
        [{devoured: true },
         {id: burger_id}], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }
}


module.exports = orm;

// // Import MySQL connection.
// var connection = require("../config/connection.js");


// // Helper function for SQL syntax.
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];

//   // loop through the keys and push the key/value as a string int arr
//   for (var key in ob) {
//     var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations 
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
      
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }

// // Object for all our SQL statement functions.
// //selectALL()
// var orm = {
//   all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },

//   // insertOne()
//   create: function(table, cols, vals, cb) {
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },
 
//    // updateOne()
//   update: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//  },

// };


// // Export the orm object 
// module.exports = orm;