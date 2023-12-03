import express from "express";
import controller from "../controllers/postData.controller.js";
const router = express.Router();

router.route("/post").post(controller);

export default router;
