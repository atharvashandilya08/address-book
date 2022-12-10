const express = require("express")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/Users");

router.get("/", (req, res) => {
    User.find({}, (err, results) => {
        err ? res.send(err) : res.send(results);
    })
})
router.post("/", (req, res) => {
    const { email, username } = req.body;
    User.find({ email: email }, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            if (results.length > 0) {
                res.status(400);
            }
        }
    User.find({username: username}, (err, results)=>{
        if (err) {
            res.send(err);
        } else {
            if (results.length > 0) {
                res.status(400);
        }
    }})
        const saltRounds = 10
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                console.log(hash);
                const user = new User({
                    email: email,
                    username: username,
                    password: hash
                });
                user.save();
                const JWT_SECRET = "gdjda ztpey ffntk xskml hopce pdwqd wttof okpbm shiyg opqwx ibngh xahrv ecxuw fxmpq vzxsx wgqlz lpu"
                const authToken = jwt.sign(JWT_SECRET, user.id)
                res.json({authToken});
            });
        });
    })


})

router.post("/login", async (req,res)=>{
    const {email, password} = req.body;
    if(email===""||password===""){
        res.status(400).json({error: "Please add credentials"})
    }
    const [user] = await User.find({email});
    console.log(user);
    const correctPassword = bcrypt.compare(password, user.password).then(result=>{
        if(result){
            const JWT_SECRET = "gdjda ztpey ffntk xskml hopce pdwqd wttof okpbm shiyg opqwx ibngh xahrv ecxuw fxmpq vzxsx wgqlz lpu"
                const authToken = jwt.sign(JWT_SECRET, user.id)
                res.json({authToken});
        }else{
            return res.status(400).json({error: "Please re-enter correct credentials"})
        }
    });
    if(user.length === 0 || !correctPassword){
        return res.status(400).json({error: "Please re-enter correct credentials"}) 
    }
    
});

router.delete("/", (req, res) => {
    User.deleteMany({}, err => {
        err ? res.send(err) : res.send("Deleted the whole database successfully!");
    })
})

module.exports = router