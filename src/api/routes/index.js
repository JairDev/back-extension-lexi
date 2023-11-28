const express = require("express");
const authRoute = require("./auth");
const postRoute = require("./postData");
const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

router.use("/auth", authRoute);
router.use("/", postRoute);

module.exports = router;
