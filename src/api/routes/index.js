const express = require("express");
const authRoute = require("./auth");
const postRoute = require("./postData");
const suggestionRoute = require("./suggestion");
const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

router.use("/auth", authRoute);
router.use("/", postRoute);
router.use("/", suggestionRoute);

module.exports = router;
