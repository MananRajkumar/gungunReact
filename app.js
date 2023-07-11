const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

// app.use(fileUpload({
//   useTempFiles : true,
//   tempFileDir : '/tmp/'
// }));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.urlencoded({extended: false}));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://gun-main-iczg.vercel.app/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api/', require('./routes/main'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/order', require('./routes/order'));

app.use(express.static(path.join(__dirname, "./frontend/public")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./frontend/index.html"));
  });

module.exports = app;