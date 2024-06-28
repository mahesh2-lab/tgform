import Admin from "../models/admin.model.js";
import bycrypt from "bcryptjs";
import genrateTokenAndSetCookie from "../utils/genrateToken.admin.js";

export const signup = async (req, res) => {
  try {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { fullName, username, branch, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ msg: "Password do not match" });
    }
    if (!validRegex.test(email)) {
      return res.status(400).json({ msg: "Invalid email" });
    }

    const user = await Admin.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const boyProilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new Admin({
      fullName,
      username,
      branch,
      email,
      password: hashedPassword,
      profilePic: boyProilePic,
    });

    if (newUser) {
      genrateTokenAndSetCookie(res, newUser._id);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        branch: newUser.rollNo,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ msg: "Admin not created" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log("error in signup", error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });
    const isPasswordCoreect = await bycrypt.compare(password, user?.password || '');

    if (!user || !isPasswordCoreect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    genrateTokenAndSetCookie(res, user._id);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });

  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log("error in login", error);
  }
};

export const logout = (req, res) => {
  try {
    res.cookie('adminjwt', "", { maxAge: 0 });
    res.status(200).json({ msg: "logged out successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log("error in login", error);
  }
};
