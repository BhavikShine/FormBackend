//FormSubmit
const express = require("express");
const { FormSubmit, loginUser } = require("./user.controller");

const router = express.Router();

//Post ------------------------------------------------>>
router.route("/register").post(loginUser);

module.exports = router;
