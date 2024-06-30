const BookModel = require("../../models/book.model");

const bookAdd = async (req, res) => {
  try {
    const book = req.body;

    const newBook = new BookModel(book);
    await newBook.save();
    res
      .status(200)
      .send({ message: "Congratulations new Book is created", book: newBook });
  } catch (error) {
    res
      .status(404)
      .send({ message: `Provide Details properly. ${error.message}` });
  }
};

module.exports = bookAdd;
