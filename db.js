const mongoose = require("mongoose");
const dotenv = require("dotenv");

//load config
dotenv.config({path: "./config/config.env"})

const dbUser = process.env.MONGO_USER;
const dbPass = process.env.MONGO_PASS;
const dbName = process.env.MONGO_DBNAME;

const dbURI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.sjszs.mongodb.net/${dbName}?retryWrites=true&w=majority`
console.log(dbURI);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect( dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;