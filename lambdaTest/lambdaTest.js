'use strict'
let fs = require("fs");
let path = require("path");
exports.handler = (event, context, callback) => {
		fs.readFile(__dirname + '/testFile.json', function (err, data) {
			console.log(data);
			if (err) throw err;
		});
};