
const express = require("express");
const app = express();
const path = require("path");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.send("Habits")
})



const mongoose = require('mongoose');
const port = process.env.PORT || 5000;


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.listen(3100, () => {
    console.log("We are going on the port")
})  