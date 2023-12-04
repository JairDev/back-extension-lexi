import express from "express";
import controller from "../controllers/translated.controller.js";

const router = express.Router();

router.route("/translated").post(controller);

export default router;
