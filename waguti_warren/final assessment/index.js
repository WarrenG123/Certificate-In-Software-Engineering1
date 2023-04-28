const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();
const config =  require("./config/database");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");











app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true})); 

//creating a connection between controller and database
mongoose.connect(config.database, {
 useNewUrlParser: true, 
 useUnifiedTopology: true  
});
const db = mongoose.connection;
//checking if db has connected
db.once("open", () => {
console.log("connected to db");
})
db.on("error", (err) => {
console.error(err);
});




app.set("view engine", "pug");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));





















app.listen(3000, () => console.log('listening on port 3000'));   
