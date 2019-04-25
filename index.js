const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('<html><body style="background-color: #2a2634">'
+ '<h1 style="text-align:center;padding:50px;color:white;font-family:verdana">Code Source : V61</h1>'
+ '</body></html>'));

app.get('/throw-error/:key', (req, res) => {
    res.send('Hello');
});

app.listen(port);
