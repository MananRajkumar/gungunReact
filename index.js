const http = require('http');
const app = require('./app');
const {connectDB} = require('./config/database');
const cloudinary = require("cloudinary").v2;


const port = process.env.PORT || 3000;

connectDB();

cloudinary.config({
    cloud_name: "dbljf31af",
    api_key: "254894558298539",
    api_secret: "jk-FVQ7wBEzkB59FwcDfqHble0s",
  });

const Server = http.createServer(app);

Server.listen(port, () => {
    console.log(`Server started listening on port ${port}`);
});