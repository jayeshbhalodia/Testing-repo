const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

console.log('process.env > ', process.env);

app.get('/', (req, res) => res.send('<html><body style="background-color: #2a2634">'
+ '<h1 style="text-align:center;padding:50px;color:white;font-family:verdana">Code Source : V47</h1>'
+ '</body></html>'));

app.get('/throw-error/:key', (req, res) => {
    res.send('hi');
});

var cat = "testing0.6";
console.log("Data >>>>> ", cat);

app.listen(port);
