import { Router } from "express";
import { registerController, loginController } from "../controllers/user.js";
export const router = Router();

router.post("/register",  registerController);
router.post("/login", loginController);
