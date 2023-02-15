const catchAsyncError = require("../middleware/catchAsyncError");
const { UserService, loginUserService } = require("./user.service");
const sendToken = require("../utils/jwtToken");
const User = require("./user.model");
const ErrorHandler = require("../utils/ErrorHandler");


exports.registerUser = catchAsyncError(async (req, res, next) => {
  try {
    const formData = await UserService(req.body);
    res.status(201).json({
      message: "User Logged In Successfully",
      success: true,
      formData,
    });
  } catch (err) {
    console.log(err, "Errr");

    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({
      message: "Username and Password is Required",
      success: false,
    });
  }
  const user = await User.findOne({ name }).select("+password");
  if (!user) {
    return res.status(400).json({
      message: "Username or Password is incorrect",
      success: false,
    });;
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return res.status(400).json({
      message: "Username or Password is incorrect",
      success: false,
    });;
  }
  sendToken(user, 200, res);
});
