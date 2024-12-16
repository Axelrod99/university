const express = require("express");
const {
  getDepartments,
  getTotalFacultiesFee,
} = require("../controllers/facultyController");

const router = express.Router();

router.route("/").get((req, res) => res.send("this is the faculty route...."));

router.get("/departments/:faculty", getDepartments);
router.get("/total", getTotalFacultiesFee);

module.exports = router;
