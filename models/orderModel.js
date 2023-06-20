const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    phoneNo: {
      type: Number,
      required: true
    },
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    pincode: {
      type: Number,
      required: true
    },
    country: {
      type: String,
      required: true
    }
});

module.exports = mongoose.model("Orders", orderSchema);