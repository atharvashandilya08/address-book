// This file handles all the server based operations and database handling

// Importing the dependencies

const express = require("express"); // Importing the server handling framework/module
const bodyParser = require("body-parser"); // Importing the framework/module to take data from the frontend
const bcrypt = require("bcrypt"); // Importing the framework/module to hash the password
const session = require("express-session") // Importing the framework/module to handle cookies/session tokens
const passport = require("passport") // Importing the framework/module to authenticate
const mongoose = require("mongoose") // Adding Databse 
const passportLocalMongoose = require("passport-local-mongoose") // Importing the Framework to register user in database

require("dotenv").config() // Configuring environment variables

// Server Configurations
const app = express(); // Creating the server
app.use(bodyParser.urlencoded({ extended: true })); // Setting the server to take data from the frontend
app.use(express.static(__dirname+"/public")) // Setting the assets path
app.set("view engine", "ejs") // Setting View Engine for the frontend
// Configuring session tokens/cookies
function configSessions() {
    // Adding cookies
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize()); // Initializing Authentication Systems
    app.use(passport.session()); // Initializing Session Tokens/Cookies related to authentication
}

configSessions(); // Configuring Sessions
// Configuring Session Tokens/Cookies in the Database
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

const addressBook = [{ name: "albert" }, { name: "sai" }, { name: "rock" }];
const groups = ["Friends", "Family"]

app.get("/", (req, res) => {
    if(req.isAuthenticated()){
        res.redirect("/home")
    } else {
        res.render("homeAnonymous");

    }
});

app.get("/home", async (req, res) => {
    if(req.isAuthenticated()){
        const currentUser = req.user;
        let [fullAddressBook] = await User.find({username: currentUser.username});
        fullAddressBook = fullAddressBook.addressBook;
        const groups = []
        if (fullAddressBook.length > 0){
            fullAddressBook.forEach(contact=>{
                groups.push(contact.group)
            })
        } else {
            groups.push("Default");
        }
        res.render("homeAuthorized", { groups: groups })
    } else {
        res.redirect("/")
    }
})

app.get("/about", (req, res) => {

    if(req.isAuthenticated()){
        res.render("about")
    } else {
        res.redirect("/")
    }
})

app.get("/contact", (req, res) => {
    if(req.isAuthenticated()){
        res.render("contact")
    } else {
        res.redirect("/")
    }
    
})
app.get("/book", async (req, res) => {

    if(req.isAuthenticated()){
        let [fullAddressBook] = await User.find({username: req.user.username});
        fullAddressBook = fullAddressBook.addressBook;
        res.render("book", {book: fullAddressBook, heading: "Your Contacts"})
    } else {
        res.redirect("/")
    }
})
app.get("/new-contact", async (req, res) => {
    if(req.isAuthenticated()){
        const currentUser = req.user;
        let [fullAddressBook] = await User.find({username: currentUser.username});
        fullAddressBook = fullAddressBook.addressBook;
        const groups = []
        if (fullAddressBook.length > 0){
            fullAddressBook.forEach(contact=>{
                groups.push(contact.group)
            })
        } else {
            groups.push("Default");
        }
        res.render("entry", {groups: groups})
    } else {
        res.redirect("/")
    }
});
app.get("/search", (req, res) => {
    if(req.isAuthenticated()){
        res.render("search")
    } else {
        res.redirect("/")
    }
});
app.post("/search", async (req, res) => {
    if(req.isAuthenticated){
        let [fullAddressBook] = await User.find({username: req.user.username})
        fullAddressBook = fullAddressBook.addressBook;
        const filtered = fullAddressBook.filter(contact => contact.name.toLowerCase().includes(req.body.searchInput.toLowerCase()))
        res.render("book", { book: filtered, heading: "Search Results" });
    } else {
        res.redirect("/");
    }
    
});
app.get("/login", (req, res) => {
    res.render("login")
});
app.post("/login", async (req, res) => {
    const username = req.body.loginUsername;
    const password = req.body.loginPassword;
    const email = req.body.loginEmail;
    const [foundUser] = await User.find({
        username: username,
        password: password,
        email: email
    });
    console.log(foundUser);
    if(foundUser){
        const user = new User({
            username: username,
            email: email,
            password: password
        });
        req.login(user, function(err) {
            if (err) {
                 console.log(err);
                 res.redirect('/login')
            } else {
                passport.authenticate('local')
                res.redirect("/home")
            }
          });
    } else {
        res.redirect("/login")
    }
    


})
app.get("/register", (req, res) => {
    res.render("register");
});
app.post("/register", async (req, res) => {
    User.register({username: req.body.username, password: req.body.password, email: req.body.email}, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            res.redirect("/register")
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/home");
            })
        }
    })

});



app.get("/logout", (req, res)=>{
    req.logout(function(err) {
        if (err) { 
            console.log(err);
            res.redirect("/home") 
        }
        res.redirect('/');
      });
});

app.post("/new-contact", async (req, res)=>{
    if(req.isAuthenticated()){
        const username = req.user.username;
        let [fullAddressBook] = await User.find({username: username});
        console.log(fullAddressBook);
        fullAddressBook = fullAddressBook.addressBook;
        console.log(fullAddressBook);
        let group=""
        if(!req.body.group){
            group = "Default"
        } else {
            group = req.body.group
        }
        const newContact = {
            name: req.body.name,
            companyOrSchool: req.body.companyOrSchool,
            group: group,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address
        }
        fullAddressBook.push(newContact);
        console.log(fullAddressBook)
        User.updateOne({username: username}, {addressBook: fullAddressBook}, err=>{
            if(!err){
                res.redirect("/book")
            }else{
                res.redirect("/new-contact");
            }
        })
        
    }else{
        res.redirect("/")
    }
});

app.get("/groups/:groupName", async(req, res)=>{
    if(req.isAuthenticated){
        let [fullAddressBook] = await User.find({username: req.user.username})
        fullAddressBook = fullAddressBook.addressBook
        const filteredAddressBook = fullAddressBook.filter(contact => contact.group === req.params.groupName);
        res.render("book", {heading: req.params.groupName, book: filteredAddressBook});
    } else {
        res.redirect("/")
    }
    
})

app.post("/delete-contact/:contactName", async (req, res)=>{
    if(req.isAuthenticated){
        let [fullAddressBook] = await User.find({username: req.user.username});
        fullAddressBook = fullAddressBook.addressBook;
        fullAddressBook = fullAddressBook.filter(contact=>contact.name !== req.params.contactName);
        console.log(fullAddressBook);
        await User.updateOne({username: req.user.username}, {addressBook: fullAddressBook});
        res.redirect("/book")
    }else{
        res.redirect("/")
    }
})

app.listen(8080, () => {
    console.log("Server has started on port 8080!")
})