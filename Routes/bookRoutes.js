const { getBooks, postBook, updateBook, deleteBook, getBook } = require('../Controllers/book');

const route = require('express').Router();

route.get('/books', getBooks)
route.get('/books/:id', getBook)
route.post('/books/add', postBook)
route.put('/books/:id', updateBook)
route.delete('/books/:id', deleteBook)

module.exports = route