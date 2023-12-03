import express from "express";
import authRoute from "./auth.js";
import postRoute from "./postData.js";
import suggestionRoute from "./suggestion.js";
const router = express.Router();

router.get("/status", (req, res) => res.send("OK"));

router.use("/auth", authRoute);
router.use("/", postRoute);
router.use("/", suggestionRoute);

export default router;
