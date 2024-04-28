const Music = require("../models/music");

const fetchAllMusic = async (req, res) => {
    const music = await Music.find({});
    res.json({music: music});
}

const fetchOneSong = async (req, res) => {
    const songId = req.params.id;
    const song = await Music.findById(songId);
    res.json({music: song});
}

const createSong = async (req, res) => {
    console.log(`Body: ${req.body}`);
    const song = req.body.song;
    const artist = req.body.artist;
    const album = req.body.album;

    const music = await Music.create({
        song: song,
        artist: artist,
        album: album,
    });
    res.json({music: music});
}

const updateSong = async (req, res) => {
    const songId = req.params.id;
    const {song, artist, album} = req.body;
    
    await Music.findByIdAndUpdate(songId, {
        song: song,
        artist: artist,
        album: album,
    });

    const updateSong = await Music.findById(songId);    
    res.json({music: updateSong});
}

const deleteSong = async (req, res) => {
    const songId = req.params.id;
    await Music.deleteOne({_id: songId});
    res.send({ Success: "Song has been deleted."});
}

module.exports = {
    fetchAllMusic,
    fetchOneSong,
    createSong,
    updateSong,
    deleteSong,
}