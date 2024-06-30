const BookModel = require("../../models/book.model");


const bookDelete = async(req,res) =>{
const {id} = req.params;

try {
    const deletedBook = await BookModel.findByIdAndDelete(id);

    if (!deletedBook) {
        return res.status(404).send({ message: "Unable to find the ID" });
      }
      res
        .status(200)
        .send({ message: "Book deleted successfully", book: deletedBook });
} catch (error) {
    res.status(404).send({ message: `Error in Deleting: ${error.message}` });
    
}
}

module.exports = bookDelete;