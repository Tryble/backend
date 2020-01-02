require('dotenv').config();

const express = require("express");
const server = express();

server.get('/', (req, res) => {
    res.send('Hello!');
});

const port = process.env.PORT || 3300;
server.listen(port, function() {
  console.log(`\n Web API Listening on localhost:${port}\n`);
});