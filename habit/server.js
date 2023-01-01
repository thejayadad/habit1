
const express = require("express");
const app = express();
const path = require("path");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.send("Habits")
})


app.listen(3100, () => {
    console.log("We are going on the port")
})