"use strict";

// var bookshelf = require('bookshelf');

var knex = require('knex')({
	client: "pg",
	connection: {
		host: "localhost",
		user: "root",
		password: 'photo',
		database: "photo",
		charset: "utf8"
	}
});

var db = require('bookshelf')(knex);

db.knex.schema.hasTable("users").then(function (exist){
	if (!exist) {
		db.knex.schema.createTable("users", function (user){
			user.increments("id").primary();
		}).then(function (table){
			console.log("Created USERS table");
		});
	}
});


module.exports = db;