const dotenv = require("dotenv");
const server = require("./server");
//const { port } = require("./config");
const port = process.env.PORT || 3000;

server.listen(port,'0.0.0.0', () => {
  console.log(`
  -----------------------------------
    SERVER IS LISTERNING ON ${port}
  -----------------------------------`);
});
