const express = require("express");
const routes = require("../api/routes");

const app = express();

app.use(express.json());

app.use(routes);

module.exports = app;
