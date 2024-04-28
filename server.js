require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const connectToDb = require("./config/connectToDB");
const cors = require("cors");
const booksRouter = require("./routes/books");
const dvdsRouter = require("./routes/dvds");
const musicRouter = require("./routes/music");


app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use("/books", booksRouter);
app.use("/dvds", dvdsRouter);
app.use("/music", musicRouter);

connectToDb();

app.get("/", (req, res) => {
    res.send(`<h1>This is the Landing Page</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server listening on Port:${PORT}`)
});