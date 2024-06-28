import Admin from "../models/admin.model.js";
import User from "../models/user.model.js";
import Data from "../models/data.model.js";
import fs from "fs";
import path from "path";

export const getUser = async (req, res) => {
    try {
        const logedInUserId = req.user._id;

        const user = await User.find(logedInUserId).select("-password");

        res.status(200).json(user);

    } catch (error) {
        console.log("error in getUser ", error);
        return res.status(500).json({ message: error.message });
    }
};


export const getstdUsers = async (req, res) => {
    try {
        const branch = req.user.branch;

        const filteredUsers = await Data.find({ branch: branch }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("error in getUser ", error);
        return res.status(500).json({ message: error.message });
    }
};

export const getstdUser = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await Data.findById(id).select("-password");


        res.status(200).json( user );

    } catch (error) {
        console.log("error in getUser ", error);
        return res.status(500).json({ message: error.message });
    }
};

