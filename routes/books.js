const express = require("express");
const router = express.Router();
const booksController = require("../controllers/bookControllers");

router.get("/", booksController.fetchAllBooks);

router.get("/:id", booksController.fetchOneBook);

router.post("/", booksController.createBook);

router.put("/:id", booksController.updateBook);

router.delete("/:id", booksController.deleteBook);


module.exports = router;