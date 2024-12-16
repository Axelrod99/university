const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
  No_of_Department: {
    type: Number,
  },
  TotalPrice: {
    type: Number,
  },
  Departments: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Faculty", FacultySchema);
