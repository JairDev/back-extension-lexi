import express from "express";
import controller from "../controllers/suggestion.controller.js";

const router = express.Router();

router.route("/suggestion").post(controller);

export default router;
