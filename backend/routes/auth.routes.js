import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/signup", signupUser);
router.get("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
