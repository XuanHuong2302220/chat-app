import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({ error: "password don't match" });

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "username already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const boy = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girl = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname: fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male" ? boy : girl,
    });

    if (newUser) {
      generateTokenandSetCookie(newUser._id, res);
      await newUser.save();

      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullname,
        username: newUser.username,
        gender: newUser.gender,
      });
    } else res.status(400).json({ error: "Invalid user data" });
  } catch (error) {
    console.log("Error in sign up Controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect)
      return res.status(400).json({ error: "Invalid username or password" });

    generateTokenandSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.log("Error in login Controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt");
    return res.status(200).json("Logged out successfully");
  } catch (error) {
    console.log("Error in logout Controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
