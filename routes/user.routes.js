const express = require('express');
const userRegister = require('../controllers/user/user-register');
const userLogin = require('../controllers/user/user-login');
const userRouter = express.Router();


userRouter.post('/register',userRegister);

userRouter.post('/login', userLogin);



module.exports = userRouter;