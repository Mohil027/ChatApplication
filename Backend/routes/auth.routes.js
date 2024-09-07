import express from "express";
import {login, logout, signup} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/authentication.middleware.js";
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", authenticate, logout);

export default router;