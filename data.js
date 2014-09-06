var http = require('http')
var fs = require('fs')
var yaml = require('js-yaml')
var express = require('express')
var cors = require('cors')
var app = express();

app.use(cors());

app.get('/', function(req,res){
	json = []
		var path = process.argv[2];
		fs.readdir(path, function(err, files) {
			if (!err) {
				files.forEach(function(file) {
					if (file.split('.')[0] != 'stderr'){
						json.push(yaml.safeLoad(fs.readFileSync(path + '/' + file)));
					} else {
						json.push(fs.readFileSync(path + '/' + file, 'utf8'))
					}
				});
			}
			res.end(JSON.stringify(json));
		});
});

var server = app.listen(8000, function() {
	console.log('listening on port %d', server.address().port);
})
