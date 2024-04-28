const Dvd = require("../models/dvds");

const fetchAllDvds = async (req, res) => {
  const dvd = await Dvd.find({});
  res.json({ dvds: dvd });
};

const fetchOneDvd = async (req, res) => {
  const dvdId = req.params.id;
  const dvd = await Dvd.findById(dvdId);
  res.json({ dvds: dvd });
};

const createDvd = async (req, res) => {
  console.log(`Body: ${req.body}`);
  const movie = req.body.movie;
  const director = req.body.director;
  const cast = req.body.cast;

  const dvd = await Dvd.create({
    movie: movie,
    director: director,
    cast: cast,
  });
  res.json({ dvds: dvd });
};

const updateDvd = async (req, res) => {
  const dvdId = req.params.id;
  const { movie, director, cast } = req.body;

  await Dvd.findByIdAndUpdate(dvdId, {
    movie: movie,
    director: director,
    cast: cast,
  });
  const updateDvd = await Dvd.findById(dvdId);
  res.json({ dvds: updateDvd });
};

const deleteDvd = async (req, res) => {
  const dvdId = req.params.id;

  await Dvd.deleteOne({ _id: dvdId });
  res.send({ Success: "DVD has been deleted" });
};

module.exports = {
  fetchAllDvds,
  fetchOneDvd,
  createDvd,
  updateDvd,
  deleteDvd,
};
