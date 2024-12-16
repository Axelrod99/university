const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.route("/").get((req, res) => res.send("this is the auth route...."));

router.post("/register", register);
router.post("/login", login);

module.exports = router;