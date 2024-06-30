const express = require("express");
const auth = require("../middlewares/auth.middleware");
const bookAdd = require("../controllers/book/book-add");
const bookGet = require("../controllers/book/book-get");
const bookRouter = express.Router();

bookRouter.post("/add", auth, bookAdd);

bookRouter.get("/", auth, bookGet);

module.exports = bookRouter;
