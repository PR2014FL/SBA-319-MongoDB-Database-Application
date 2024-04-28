const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    album: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    tracks: [String],
});

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;