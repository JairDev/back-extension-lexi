/* eslint-disable no-undef */
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});
const routes = require("../src/api/routes");

const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/v1", routes);

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

module.exports = app;
