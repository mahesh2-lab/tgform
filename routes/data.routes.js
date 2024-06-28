import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import AdminProtectRoute from "../middleware/admin.protectRoute.js";
import { sendData, getData, UpdateStatus } from "../controllers/data.controller.js";



const router = express.Router();


router.get("/getdata", protectRoute, getData);
router.post("/send", protectRoute, sendData);
router.post("/updatestatus",AdminProtectRoute, UpdateStatus);



export default router;