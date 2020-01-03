const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./middlewares/error");
const { restricted } = require("./middlewares/auth");

const authRouter = require("./users/user-router");
const tribeRouter = require("./tribes/tribe-router");

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

server.use("/api/auth", restricted, authRouter);
server.use("/api/tribes", tribeRouter);

server.get("/", (req, res) => {
  res.status(200).json("Hello!");
});

server.use(errorHandler);

module.exports = server;
