const mongoose = require("mongoose");
const { DriverStatus } = require("../config/enum");

const userSchema = new mongoose.Schema({
    accountType: {
      type: String,
      required: [true, "account type is required"],
    },
  FirstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  LastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 60,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 25,
  },
  licenseNumber: {
    type: String,
    unique: [true, "license number is already taken"],
  },
  taxiType: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  driverStatus: {
    type: String, enum : Object.values(DriverStatus), default : DriverStatus.PENDING
},
  phoneNumber: {
    type: String,
    required: false
  },
  availability: Boolean,
  rating: { type: Number, min: 0, max: 5 },
  currentlocation: Object,

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
