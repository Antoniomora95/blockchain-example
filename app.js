var express = require('express');

var app = express();
var cors = require('cors');

app.use(cors())

app.get('/', function (req, res) {
    res.send('hello world.');
});

app.post('/user', function (req, res) {
    let dateStr = new Date().toLocaleString();
    res.send('user was created at: '+ dateStr);
});

app.listen(3000, function () {
    console.log('blockchain app running on port 3000!');
});