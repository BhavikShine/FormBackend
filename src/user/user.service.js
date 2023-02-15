const User = require("./user.model");
const ErrorHandler = require("../utils/ErrorHandler");

// Register User Service        --------------------------->>

exports.loginUserService = async ({ name, password }) => {
  if (!name || !password) {
    throw new ErrorHandler("Please provide Name and Password", 400);
  }
  const user = await User.findOne({ name }).select("+password"); // Check if user exist or not through name
  if (!user) {
    throw new ErrorHandler("Name or Password is incorrect", 400);
  }
  const isPasswordMatch = await user.comparePassword(password); // Compare Password method from user modal to check password.
  if (!isPasswordMatch) {
    throw new ErrorHandler("Name or password is incorrect", 400);
  }
  const userData = JSON.parse(JSON.stringify(user));
  delete userData.password;
  return userData;
};
