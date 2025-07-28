import express from "express";
import { verifyUserResult, addOrUpdateResult } from "../controllers/resultController";

const router = express.Router();

router.post("/verify", verifyUserResult);
router.post("/add", addOrUpdateResult);

export default router;
