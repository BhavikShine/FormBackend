const { FormDataService } = require("./form.service");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.FormSubmit = catchAsyncError(async (req, res, next) => {
  try {
    console.log(req.file.filename,"filename");
    const formData = await FormDataService(req.body, `uploads/${req.file.filename}`);
    res.status(201).json({
      message: "Form Created Successfully",
      success: true,
      formData,
    });
  } catch (err) {
    console.log(err, "Errr");
    if (err?.keyValue?.aadharNumber && err.code === 11000) {
      
    return res.status(400).json({
      message: "Duplicate Aadhar Number Found",
      success: false,
    });
    } else if (err?.keyValue?.mobileNumber && err.code === 11000) {
      return res.status(400).json({
        message: "Duplicate Mobile Number Found",
        success: false,
      });
    }

    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
});
