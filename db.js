// This is the file where the server connects to the database
// Importing dependencies
const mongoose = require("mongoose"); // Adding the MongoDB Framework/Module
const passportLocalMongoose = require("passport-local-mongoose") // Adding the authentication framework/module
const passport = require(passport)
require("dotenv").config() // Configuring the environment variables
// Connecting to the database
mongoose.connect(process.env.MONGOOSE_URL, 
    err => { 
        err ? 
        console.log(err) // Executes when there is an error
        : 
        console.log("MongoDB Server Started Successfully!") // Executes when the database is connected
});
// Setting the Schema or the structure of a database Entry
const userSchema = new mongoose.Schema({ 
    username: { type: String, required: true }, // Plain Text
    email: { type: String, required: true }, // Plain text
    password: { type: String, required: true }, // Hashed
    addressBook: { type: Array, required: true } // Structure: [{"name" : "Green Sval", group: "Friends", "companyOrSchool":"Google", "phone":"+91-1234567890", "email":"green.sval@gmail.com", "address":"#83, Frandal Brundi St, Salamala Block 4, Jyanim - 635612"}]
});

userSchema.plugin(passportLocalMongoose); // Adding the passport local mongoose plugin to the database

const User = mongoose.model("User", userSchema); // Adding the Database Model

passport.use(User.createStrategy()); // Initializing local strategy: a method to sign in through username and password

passport.serializeUser(User.serializeUser()) // Initializing sign-in method
passport.deserializeUser(User.deserializeUser()) 

module.exports = User; // Exporting the Model User