const mongoose = require("mongoose");
require("dotenv");

const connectToDb = async ()=> {
    await mongoose.connect(process.env.DB_URL);
    console.log("Currently connected to Test MongoDB" )
}

module.exports = connectToDb;