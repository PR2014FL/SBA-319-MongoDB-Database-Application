const Book = require("../models/books");

const fetchAllBooks = async (req, res) => {
    const book = await Book.find({});
    res.json({books: book});
}

const fetchOneBook = async (req, res) => {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    res.json({books: book});
}

const createBook = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    const title = req.body.title;
    const author = req.body.author;
    const pages = req.body.body;
    const subject = req.body.subject;
    const publicationDate = req.body.publicationDate;

    const book = await Book.create({
        title: title,
        author: author,
        pages: pages,
        subject: subject,
        publicationDate: publicationDate
    });
    res.json({books: book});
}

const updateBook = async (req, res) => {
    const bookId = req.params.id;
    const {title, author, pages, subject, publicationDate} = req.body;
    
    await Book.findByIdAndUpdate(bookId, {
        title: title,
        author: author,
        pages: pages,
        subject: subject,
        publicationDate: publicationDate
    });
    
    const updateBook = await Book.findById(bookId);
    res.json({books: updateBook});
}

const deleteBook = async (req, res) => {
    const bookId = req.params.id;
    await Book.deleteOne({_id: bookId});
    res.send({ Success: "Book has been deleted from collection."})
}

module.exports = {
    fetchAllBooks,
    fetchOneBook,
    createBook,
    updateBook,
    deleteBook
}