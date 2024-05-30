import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId }, // all users but not equal to loggedIn
    }).select("-password");

    res.status(200).json({
      filteredUsers,
    });
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    res.send(500).json({ error: "Internal Server Error" });
  }
};
