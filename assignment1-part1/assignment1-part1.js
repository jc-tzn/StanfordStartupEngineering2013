var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(req, res) {
	var fs = require('fs');
	var outfile = "hello.txt";
	var out = "A startup is a business built to grow rapidly.\n";
	fs.writeFileSync(outfile, out);  
	console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
	res.send("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});