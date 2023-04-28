const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();




app.set("view engine", "pug");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));





















app.listen(3000, () => console.log('listening on port 3000'));   
