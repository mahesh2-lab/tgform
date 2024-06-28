 import  mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectToMongodb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("connected to mongoDb failed", error);
        process.exit(1);
    }
}
export default connectToMongodb;