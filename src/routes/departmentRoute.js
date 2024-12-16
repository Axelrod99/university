const express = require("express");
const {
  addDepartment,
  getAllDepartment,
  updateDepartment,
} = require("../controllers/departmentController");

const router = express.Router();

router
  .route("/")
  .get((req, res) => res.send("this is the department route...."));

router.get("/all", getAllDepartment);
router.post("/createDepartment", addDepartment);
router.patch("/:id", updateDepartment);

module.exports = router;
