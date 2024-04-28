require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const connectToDb = require("./config/connectToDB");
const cors = require("cors");


app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));



connectToDb();

app.get("/", (req, res) => {
    res.send("<h1>This is the Landing Page</h1>");
});

app.listen(PORT, () => {
    console.log(`Server listening on Port:${PORT}`)
});