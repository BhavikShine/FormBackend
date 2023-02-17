//FormSubmit
const express = require("express");
const { loginUser, logout } = require("./user.controller");

const router = express.Router();

//Post ------------------------------------------------>>
router.route("/register").post(loginUser);
router.route("/logout").get(logout);

module.exports = router;
