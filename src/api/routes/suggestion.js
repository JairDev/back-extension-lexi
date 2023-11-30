const express = require("express");
const controller = require("../controllers/suggestion.controller");

const router = express.Router();

router.route("/suggestion").post(controller.suggestion);

module.exports = router;
