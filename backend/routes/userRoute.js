import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserSideBar } from "../controllers/usersController.js";

const router = express.Router();

router.get("/", protectRoute, getUserSideBar);

export default router;
