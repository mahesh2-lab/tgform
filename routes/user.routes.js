import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import AdminProtectRoute from "../middleware/admin.protectRoute.js";
import { getUser } from "../controllers/user.controller.js";
import { getstdUsers, getstdUser } from "../controllers/user.controller.js";
import { UpdateStatus } from "../controllers/data.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUser);
router.get("/std", AdminProtectRoute, getstdUsers);
router.get("/:id", AdminProtectRoute, getstdUser);



export default router;