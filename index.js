const server = require("./server");
const { port } = require("./config");

server.listen(() => {
  console.log(`
  -----------------------------------
    SERVER IS LISTERNING ON ${port}
  -----------------------------------`);
});
