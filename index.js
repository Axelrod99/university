const express = require("express");
const dbConnection = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./src/routes/authRoute")
const departmentRoute = require("./src/routes/departmentRoute")
const facultyRoute = require("./src/routes/facultyRoute")

const app = express();

app.use(cors());

const PORT = process.env.PORT || 1001;

app.use(express.json());

dbConnection();

app.get("/", (req, res) => {
  return res.json({ msg: `App running on PORT ${PORT}...` });
});

app.use("/auth", authRoute)
app.use("/department", departmentRoute)
app.use("/faculty", facultyRoute)

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

app.listen(PORT);
