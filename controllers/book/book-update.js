const BookModel = require("../../models/book.model");

const bookUpdate = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedBook = await BookModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).send({ message: "Unable to find the ID" });
    }
    res
      .status(200)
      .send({ message: "Book Updated successfully", book: updatedBook });
  } catch (error) {
    res.status(404).send({ message: `Error in updating: ${error.message}` });
  }
};

module.exports = bookUpdate;
