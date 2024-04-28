const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    song: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    album: String,
});

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;