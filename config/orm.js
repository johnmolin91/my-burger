var connection = require("./connection.js");

var orm = {
	selectAll: function(cb) {
		var queryString = "SELECT * FROM burgers"
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	};

	insertOne: function(addition, cb) {
		var queryString = "INSERT INTO burgers (burger_name) VALUES " + (addition.toString());
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	};
	updateOne: function(condition, cb) {
		var queryString = "UPDATE burgers SET devoured = true WHERE " + condition;
		connectoin.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		})
	}
}

module.exports = orm;