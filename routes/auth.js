var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { isLength } = require("lodash");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name","Name has to be at least 3 charecters").isLength({min :3}),
    check('password', "Please provide the password of at least 5 charecters"),isLength({min:5})
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;