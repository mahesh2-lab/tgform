import express from 'express';
import connectToMongodb from './db/connectToMongo.js';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import dataRoutes from "./routes/data.routes.js";
import userRoutes from "./routes/user.routes.js";
import fileRoutes from "./routes/file.routes.js";
import adminAuthRoutes from "./routes/admin.auth.routes.js";
import backupData from './controllers/backup.js';
import cron from 'node-cron';
import path from 'path';    


const app = express();
const port = 3000;

app.use(express.json({ limit: '20mb' }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const __dirname = path.resolve();

app.use("/api/file", fileRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/user", userRoutes);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist","index.html"));
   
});
app.use("/api/adminAuth", adminAuthRoutes);


cron.schedule('0 12 * * *', async () => {
    try {
        await backupData();
    } catch (error) {
        console.error('Error running scheduled backup:', error);
    }
}, {
    timezone: 'Asia/Kolkata' 
});

app.listen(port, () => {
    connectToMongodb();
console.log(path.join(__dirname, "dist","index.html"))

    console.log(`Server is running on port ${port}`);
});
