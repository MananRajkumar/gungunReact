const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  description1: {
    type: String,
    required: [true, "Please Enter product Description 1"],
  },
  description2: {
    type: String,
    required: [true, "Please Enter product Description 2"],
  },
  manufactureYear: {
    type: Number,
  },
  
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  edition: {
    type: Number
  },
  numberOfPages: {
    type: Number,
  },
  language: {
    type: String
  }
});

module.exports = mongoose.model("Product", productSchema);