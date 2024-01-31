const expressAsyncHandler = require("express-async-handler");
const User = require("../../modal/user/user");
const generateToken = require("../../config/tokenConfig");

//register controller
const userRegisterController = expressAsyncHandler(async (req, res) => {
  console.log("cvbnghjklghj")
  const userExists = await User.findOne({ email: req?.body?.email });
  if (userExists) {
    res.json({error:"User already exists"});
  return;
  }
  try {
    const user = await User.create({
      userName: req?.body?.firstName,
      email: req?.body?.email,
      password: req?.body?.password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(error.status).json(error.message);
  }
});

//Login controller

const userLoginController = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exists
  const userFound = await User.findOne({ email });
  //Check if password is match
  if (userFound && (await userFound.isPasswordMatched(password))) {
    res.json({
      _id: userFound?._id,
      firstName: userFound?.firstName,
      lastName: userFound?.lastName,
      email: userFound?.email,
      profilePhoto: userFound?.profilePhoto,
      isAdmin: userFound?.isAdmin,
      token: generateToken(userFound?._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Login Credentials");
  }
});

//logout controller
const logoutController = (req, res) => {
  // Destroy the user's session
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Redirect or respond as needed after logout
    res.status(200).json({ message: "Logout successful" });
  });
};

module.exports = {
  userRegisterController,
  userLoginController,
  logoutController,
};
