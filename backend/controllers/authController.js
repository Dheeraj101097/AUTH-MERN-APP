const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ message: "User already exixts", success: false });
    }
    // next create model of user
    const userData = new UserModel({ name, email, password });
    // now encrypt password
    userData.password = await bcrypt.hash(password, 10);
    await userData.save();
    //
    res.status(201).json({ message: "Signup Done", success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
    console.log("controller error", error);
  }
};

// login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(403)
        .json({ message: "Email or Password is wrong", success: false });
    }
    // next decrpyt pas and check

    const isPassword = await bcrypt.compare(password, user.password);

    //if pas right go forwrd jwt
    if (!isPassword) {
      return res
        .status(403)
        .json({ message: "Email or Password is wrong", success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "Login Done",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
    console.log("controller error", error);
  }
};

module.exports = { signup, login };
