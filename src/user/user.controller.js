const catchAsyncError = require("../middleware/catchAsyncError");
const { UserService}=require("./user.service");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  try {
    console.log(req.body, "filename");
    const formData = await UserService(req.body);
    res.status(201).json({
      message: "Form Created Successfully",
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


exports.FormSubmit = catchAsyncError(async (req, res, next) => {
  try {
    console.log(req.body, "filename");
    const formData = await UserService(req.body);
    res.status(201).json({
      message: "Form Created Successfully",
      success: true,
      formData,
    });
  } catch (err) {

    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
});
