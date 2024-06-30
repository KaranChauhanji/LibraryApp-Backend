const jwt = require("jsonwebtoken");
const BookModel = require("../models/book.model");
require("dotenv").config();

const verifyAuthor = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization.split(" ")[1];

  try {
    const bookAuthor = await BookModel.findOne({ _id: id });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (bookAuthor.author !== decoded.author) {
      return res
        .status(404)
        .send({ message: "You are not authorize to edit this book." });
    }

    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = verifyAuthor;
