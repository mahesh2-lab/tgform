import jwt from 'jsonwebtoken';
import Admin from '../models/admin.model.js';
const AdminProtectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.adminjwt;
        if (!token) {
            return res.status(401).json({ message: "You are not authorized to access this route no token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "You are not authorized to access this route invalid token" });
        }
        const user = await Admin.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({ message: "user not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("error in middleware ", error);
        res.status(401).json({ message: "You are not authorized to access this route" });
    }
};

export default AdminProtectRoute;