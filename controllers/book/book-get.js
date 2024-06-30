const BookModel = require("../../models/book.model");

const bookGet = async (req, res) => {
  const { title, rating, price } = rq.body;

  let searchQuery = {};

  if (title) {
    searchQuery.title = { $regex: title, $option: "i" };
  }

  if (rating) {
    searchQuery.rating = { $regex: rating, $option: "i" };
  }

  if (price) {
    searchQuery.price = { $regex: price, $option: "i" };
  }

  try {
    const book = await BookModel.find(searchQuery);
    res.status.send({ message: book });
  } catch (error) {
    res
      .status(404)
      .send({ message: `Error in getting the books: ${error.message}` });
  }
};


module.exports = bookGet;