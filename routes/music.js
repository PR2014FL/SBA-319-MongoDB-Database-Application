const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicControllers");

router.get("/", musicController.fetchAllMusic);

router.get("/:id", musicController.fetchOneSong);

router.post("/", musicController.createSong);

router.put("/:id", musicController.updateSong);

router.delete("/:id", musicController.deleteSong);

module.exports = router;