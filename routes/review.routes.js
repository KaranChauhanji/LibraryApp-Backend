const express = require('express');
const auth = require('../middlewares/auth.middleware');
const reviewRouter = express.Router();

reviewRouter.get('/',auth,async(req,res)=>{
    
})