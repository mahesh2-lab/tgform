import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { uploadFiles } from "../controllers/files.controller.js";
import { downloadFile , stdFile} from "../controllers/files.controller.js";

const router = express.Router();

router.post("/upload", protectRoute, uploadFiles);
router.get("/download/:fileName", protectRoute, downloadFile)
router.get("/std/:fileName/:idname",  stdFile)


export default router;