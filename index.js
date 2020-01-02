const server = require("./server");
const { port } = require("./config");

server.listen(port,'0.0.0.0', () => {
  console.log(`
  -----------------------------------
    SERVER IS LISTERNING ON ${port}
  -----------------------------------`);
});
