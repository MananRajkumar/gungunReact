const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


app.use(fileUpload({
  useTempFiles : true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/api/', require('./routes/main'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/order', require('./routes/order'));

app.use(express.static(path.join(__dirname, "./frontend/public")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./frontend/index.html"));
  });

module.exports = app;