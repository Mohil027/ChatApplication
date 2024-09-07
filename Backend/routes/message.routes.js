import express from "express";
import {sendMessage, getMessages} from "../controllers/message.controller.js";
import { authenticate } from "../middlewares/authentication.middleware.js";




const router = express.Router();

router.get("/:id", authenticate, getMessages)


router.post("/send/:id", authenticate, sendMessage)

export default router;