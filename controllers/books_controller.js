const books = [];
let id = 0;

module.exports = {
  getBooks: (req, res) => {
    res.json(books);
  },
  // getBook: ,
  createBook: (req, res) => {
    // const newBook = { ...req.body, id: id };
    const { title, author } = req.body;
    const newBook = {
      title,
      author,
      id
    }
    id++;
    books.push(newBook);
    console.log('-------------- books', books);
    res.json(books);
  },
  updateBook: (req, res) => {
    const bookId = req.params.id;
    const indexOfBook = books.findIndex(book => book.id === parseInt(bookId));
    if (indexOfBook === -1) {
      res.status(404).send(`Error! A book with id ${bookId} doesn't exist!`);
    } else {
      // books[indexOfBook].name = req.body.name;
      books[indexOfBook] = { ...req.body, id: books[indexOfBook].id };
      res.json(books);
    }
  },
  deleteBook: (req, res) => {
    const bookId = req.params.id;
    const indexOfBook = books.findIndex(book => book.id === parseInt(bookId));
    if (indexOfBook === -1) {
      res.status(404).send(`Error! A book with id ${bookId} doesn't exist!`);
    } else {
      console.log('indexOfBook', indexOfBook);
      books.splice(indexOfBook, 1);
      res.json(books);
    }
  },
}