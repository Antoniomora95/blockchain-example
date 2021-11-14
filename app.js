var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');


// investigate why do we need body parser --> i installed it because all the body coming in req was undefined
// but need to know why.
// also check how does cors work, without line 12, requests will fail in your client app, index.html in this case
app.use(bodyParser.json());

app.use(cors())

app.get('/', function (req, res) {
    res.send('hello world.');
});

app.post('/user', function (req, res) {
    let dateStr = new Date().toLocaleString();
    console.log('backend', req);
    response = {message: 'user was created at: '+ dateStr, data: req.body};
    res.send(response);
});

app.listen(3000, function () {
    console.log('blockchain app running on port 3000!');
});