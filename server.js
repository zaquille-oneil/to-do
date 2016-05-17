var express = require('express');
var app = express();
app.listen(8000);
app.use(express.static(__dirname));
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})
console.log('listening on port 8000');

// jquery, express/node, mongodb, js fundamentals, css