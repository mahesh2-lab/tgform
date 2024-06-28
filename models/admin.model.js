import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true

    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    branch: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    profilePic: {
        type: String,
        default: ""
    }


}, { timestamps: true });

const Admin = mongoose.model("Admin", userSchema);
export default Admin;