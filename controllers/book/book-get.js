const BookModel = require("../../models/book.model");

const bookGet = async (req, res) => {
  const searchQuery = req.query;
  try {
    const book = await BookModel.find(searchQuery);
    res.status(200).send({ message: book });
  } catch (error) {
    res
      .status(404)
      .send({ message: `Error in getting the books: ${error.message}` });
  }
};


module.exports = bookGet;