const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  images: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: [50, "Name cannot exceed 50 characters"],
    minlength: [3, "Name must be atleast 3 characters"],
  },
  aadharNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^\d{12}$/.test(value);
      },
      message: "Aadhar Number should be 12 digits",
    },
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value);
      },
      message: "Mobile Number should be 10 digits",
    },
  },
  ward: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    required: true,
  },
});

module.exports = mongoose.model("Form", formSchema);
