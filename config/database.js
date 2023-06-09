const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017";

const connectDB = () => {
  // mongoose
  //   .connect(URL, {
  //     dbName: "backend",
  //   })
  //   .then((c) => console.log(`Database Connected with ${c.connection.host}`))
  //   .catch((e) => console.log(e));
  // mongoose
  //   .connect("mongodb://localhost:27017/backend", {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //   })
  //   .then((c) => console.log(`Database Connected with ${c.connection.host}`))
  //   .catch((e) => console.log(e));

  mongoose.connect('mongodb://127.0.0.1:27017/backend', { useNewUrlParser: true, useUnifiedTopology: true }).then((c) => console.log(`Database Connected with ${c.connection.host}`))
 .catch((e) => console.log(e));

};

cloudinary.config({
  cloud_name: "dbljf31af",
  api_key: "254894558298539",
  api_secret: "jk-FVQ7wBEzkB59FwcDfqHble0s",
});

module.exports = {
  connectDB: connectDB,
};
