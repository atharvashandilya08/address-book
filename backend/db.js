const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set('strictQuery', false)
const connect = () => {
    mongoose.connect(process.env.URL, err=> err ? console.log(err) : console.log("Connected to MongoDB successfully!"))
}

module.exports = connect;