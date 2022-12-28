const express = require("express");
const app = express();
const routers = require("./routers");
const HttpStatusCode = require("http-status-codes");

app.get("/", function (req, res) {
  res.json("BACKEND ÇALIŞIYOR");
});

app.use(routers.toDoRouter);

app.use((req, res, next) => {
  res.status(HttpStatusCode.NOT_FOUND).send("404 NOT FOUND");
});

module.exports = app;