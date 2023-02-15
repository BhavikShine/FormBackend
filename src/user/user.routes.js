//FormSubmit
const express = require("express");
const { FormSubmit } = require("./user.controller");

const router = express.Router();

//Post ------------------------------------------------>>
router.route("/register").post(FormSubmit);

module.exports = router;
