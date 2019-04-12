const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('<html><body style="background-color: #2a2634"><h1 style="text-align:center;padding:50px;color:white;font-family:verdana">Code Source : V5</h1></body></html>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
