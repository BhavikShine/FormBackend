const User = require("./user.model");

// Register User Service        --------------------------->>

exports.UserService = async (payload) => {
  try {
    return await User.create(payload);
  } catch (err) {
    throw err;
  }
};
