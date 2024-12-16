const Department = require("../model/departmentModel");
const Faculty = require("../model/facultyModel");

const getDepartments = async (req, res, next) => {
  const faculty = req.params.faculty;

  try {
    const departments = await Department.find({ faculty });
    res.status(200).json(departments);
  } catch (error) {
    console.error("Error finding departments:", error);
    throw error;
  }
};

const getTotalFacultiesFee = async (req, res) => {
    try {
      const departments = await Department.find();
  
      let totalStudents = 0;
      let totalFee = 0;
  
      departments.forEach((department) => {
        totalStudents += parseInt(department.No_of_Students);
        totalFee += parseInt(department.No_of_Students) * department.price;
      });
  
      await Department.updateOne({}, { $set: { totalFee } });
  
      res.json(totalFee);
    } catch (error) {
      console.error("Error getting total fee for department:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

module.exports = { getDepartments, getTotalFacultiesFee };