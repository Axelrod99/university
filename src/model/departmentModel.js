const mongoose = require("mongoose");

const Faculty = [
  "Agriculture",
  "Art",
  "Clinical Science",
  "Business Admininstration",
  "Education",
  "Technology",
  "Law",
  "Science",
  "Social Sciences",
  "Pharmacy",
];

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  No_of_Students: {
    type: Number,
  },
  price: {
    type: Number,
  },
  faculty: {
    type: String,
    enum: Faculty,
  },
  totalFee: {
    type: Number,
  }
});

module.exports = mongoose.model("Department", DepartmentSchema);
