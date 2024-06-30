const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(404).send("Token is not Available.");
  }
  try {
    // verifying the token though jwt.verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(404).send({ message: "You are not Authorized." });
    }

    req.body.userId = decoded.userId;
    req.body.author = decoded.username;
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = auth;
