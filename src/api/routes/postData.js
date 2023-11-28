const express = require("express");
const controller = require("../controllers/postData.controller");

const router = express.Router();

router.route("/post").post(controller.postData);

module.exports = router;
