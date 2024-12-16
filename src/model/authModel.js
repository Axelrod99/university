const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "It must have a firstName"],
    },
    lastName: {
      type: String,
      required: [true, "It must have a lastName"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "It must have an email"],
    },
    password: {
      type: String,
      required: [true, "It must have a password"],
    },
  },
  { timestamps: true } 
);


userSchema.pre("save", function (next) {
    const user = this;
  
    if (!user.isModified("password")) return next();
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
  
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
  
        user.password = hash;
        next();
      });
    });
  });
  
  userSchema.methods.generateAccessJWT = function () {
    let payload = {
      id: this._id,
    };
  
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "20m",
    });
  };

  module.exports = mongoose.model("User", userSchema);