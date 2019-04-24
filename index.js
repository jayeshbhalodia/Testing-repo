const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

console.log('process.env > ', process.env);

app.get('/', (req, res) => res.send('<html><body style="background-color: #2a2634">'
+ '<h1 style="text-align:center;padding:50px;color:white;font-family:verdana">Code Source : V39</h1>'
+ '</body></html>'));

app.get('/throw-error/:key', (req, res) => {
    res.send('hi');
});

var data = "testing";

console.log("Data > ", data);

app.listen(port);
