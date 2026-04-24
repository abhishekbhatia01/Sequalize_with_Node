import express from "express";
import { shortenUrl, redirectToOriginalUrl } from "./controller.js";

const router = express.Router();

router.post("/shorten", shortenUrl);
router.get("/:shortCode", redirectToOriginalUrl);

export default router;