const mongoose = require("mongoose");

// const URL = "mongodb://localhost:27017";


// mongoDB Atlas Connection

const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://mananrajkumar98:8IgIwO42zR2eqvK4@gungunsewing.u2x5cqs.mongodb.net/?retryWrites=true&w=majority'


const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Use the client object to interact with your MongoDB databases
    const db = client.db('gungunSewing');
    // Perform database operations here

  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
  } finally {
    // Close the connection when done
    await client.close();
  }
}

const connectDB = connect;


// const connectDB = () => {
//   // mongoose
//   //   .connect(URL, {
//   //     dbName: "backend",
//   //   })
//   //   .then((c) => console.log(`Database Connected with ${c.connection.host}`))
//   //   .catch((e) => console.log(e));
//   // mongoose
//   //   .connect("mongodb://localhost:27017/backend", {
//   //     useNewUrlParser: true,
//   //     useUnifiedTopology: true,
//   //     useCreateIndex: true,
//   //   })
//   //   .then((c) => console.log(`Database Connected with ${c.connection.host}`))
//   //   .catch((e) => console.log(e));

//   mongoose.connect('mongodb://127.0.0.1:27017/backend', { useNewUrlParser: true, useUnifiedTopology: true }).then((c) => console.log(`Database Connected with ${c.connection.host}`))
//  .catch((e) => console.log(e));

// };



module.exports = {
  connectDB: connectDB,
};
