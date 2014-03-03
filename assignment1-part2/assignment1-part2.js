var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(req, res) {

	var fs = require('fs');
	var index = 2;
	var result = [];
	var prime = true;

	while (result.length < 100) {
		for (var i = 0; i < result.length; i++) {
			if (result[i] <= Math.sqrt(index) && (index/result[i] == parseInt(index/result[i]))) {
				prime = false;
				break;
			}
		}
		if (prime) result.push(index);
		index++;
		prime = true;
	}

	var outfile = "result.txt";
	var out = JSON.stringify(result).replace(/(\[|\])/g,'');
	fs.writeFileSync(outfile, out);
	res.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});