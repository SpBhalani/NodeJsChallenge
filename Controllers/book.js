const Book = require("../Model/Book")
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postBook = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        book.title = req.body.title;
        book.author = req.body.author;
        book.summary = req.body.summary;

        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getBook,
    getBooks,
    postBook,
    updateBook,
    deleteBook
}