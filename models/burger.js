var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	createOne: function(name, cb) {
		orm.createOne("burgers", [
			"burger_name"], [
			], [
			name
			], cb);
	},
	updateOne: function(id, cb) {
		var condition = "id=" + id;
		orm.updateOne("burgers", {
			devoured: true
		}, condition, cb);
		}
	}
};

module.exports = burger;