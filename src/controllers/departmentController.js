const Department = require("../model/departmentModel");

const addDepartment = async (req, res) => {
  try {
    const newDepartment = req.body;
    const No_of_Students = parseInt(req.body.No_of_Students); // Ensure No_of_Students is a number
    const price = req.body.price;
    const userId = req.params.id;

    // Calculate totalFee before creating department
    const totalFee = No_of_Students * price;

    const department = await Department.create({
      ...newDepartment,
      user: userId,
      totalFee,
    });

    res.status(200).json(department);
  } catch (error) {
    console.error("Error creating department:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllDepartment = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const { name, No_of_Students, price, faculty } = req.body;

    const department = await Department.findOne({ _id: req.params.id });

    if (!department) {
      throw new NotFoundError(`no department with id ${req.params.id} `);
    }

    if (name) department.name = name;
    if (No_of_Students) department.No_of_Students = No_of_Students;
    if (price) department.price = price;
    if (faculty) department.faculty = faculty;

    await department.save();
    res.status(200).json(department);
  } catch (error) {
    console.error("Error updating department:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addDepartment,
  getAllDepartment,
  updateDepartment,
};
