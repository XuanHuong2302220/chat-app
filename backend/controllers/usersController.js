import User from "../models/userModel.js";

export const getUserSideBar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filterUser = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );

    res.status(200).json(filterUser);
  } catch ({ error: error }) {
    console.log("Error in getUser controller", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
