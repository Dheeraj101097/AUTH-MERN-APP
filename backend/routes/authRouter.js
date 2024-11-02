const { signup, login } = require("../controllers/authController");
const {
  loginValidation,
  signupValidation,
} = require("../middlewares/authValidation");

const router = require("express").Router();

// POST method route
router.post("/login", loginValidation, login);

//
router.post("/signup", signupValidation, signup);

//

module.exports = router;
