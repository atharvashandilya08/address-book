const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require("./db");
db();

const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use("/auth", require("./routes/auth"))
app.use("/address", require("./routes/address"))

app.listen(port, ()=>{console.log("Server started on http://localhost:"+port)})