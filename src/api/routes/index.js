const express = require("express");
const authRoute = require("./auth");
const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

router.use("/auth", authRoute);

module.exports = router;
