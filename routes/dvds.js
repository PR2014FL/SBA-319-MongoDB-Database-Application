const express = require("express");
const router = express.Router();
const dvdController = require("../controllers/dvdControllers");

router.get("/", dvdController.fetchAllDvds);

router.get("/:id", dvdController.fetchOneDvd);

router.post("/", dvdController.createDvd);

router.put("/:id", dvdController.updateDvd);

router.delete("/:id", dvdController.deleteDvd);

module.exports = router;
