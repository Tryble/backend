//require('dotenv').config();
const server = require("./server");
const { port } = require("./config");

server.listen(port, function() {
  console.log(`
  -----------------------------------
    SERVER IS LISTERNING ON ${port}
  -----------------------------------`);
});
