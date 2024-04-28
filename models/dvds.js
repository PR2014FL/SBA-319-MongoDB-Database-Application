const mongoose = require("mongoose");

const dvdSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  cast: [String, String, String],
});

const Dvd = mongoose.model("Dvd", dvdSchema);

module.exports = Dvd;
