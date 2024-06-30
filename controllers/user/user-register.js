const bcrypt = require("bcrypt");
const UserModel = require("../../models/user.model");

const userRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {

    // hashing the password through bcrypt
    bcrypt.hash(password, 2, async (err, hash) => {
      if (err) {
        res
          .status(404)
          .send({ message: `Error in hashing the password: ${err.message}` });
      }

      if (hash) {
        const newUser = new UserModel({ username, email, password: hash });
        await newUser.save();
        res
          .status(200)
          .send({ message: `Congratulations ${username} you are registered` });
      }
    });
  } catch (error) {
    res
      .status(404)
      .send({ message: `Provide Proper Details: ${error.message}` });
  }
};

module.exports = userRegister;
