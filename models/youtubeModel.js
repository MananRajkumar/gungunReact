const mongoose = require("mongoose");

const youtubeSchema = new mongoose.Schema({
  link: {
    type: String,
    required: [true, "Please Enter the youtube video link"]
  },
  title: {
    type: String,
    required: [true, "Please Enter product Name"]
  },
  category: {
    type: String,
    required: [true, "Please Enter Category Name"] 
  }
});

module.exports = mongoose.model("Youtube", youtubeSchema);