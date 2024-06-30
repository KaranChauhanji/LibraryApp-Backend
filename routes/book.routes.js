const express = require("express");
const auth = require("../middlewares/auth.middleware");
const bookAdd = require("../controllers/book/book-add");
const bookGet = require("../controllers/book/book-get");
const verifyAuthor = require("../middlewares/verifyAuthor.middelware");
const bookUpdate = require("../controllers/book/book-update");
const bookDelete = require("../controllers/book/book-delete");
const bookRouter = express.Router();

bookRouter.post("/add", auth, bookAdd);

bookRouter.get("/", auth, bookGet);

bookRouter.patch("/update/:id", auth, verifyAuthor, bookUpdate);

bookRouter.delete("/delete/:id", auth, verifyAuthor, bookDelete);

module.exports = bookRouter;
