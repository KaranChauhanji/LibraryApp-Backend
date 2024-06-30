const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const UserModel = require('../../models/user.model');
dotenv.config();


const userLogin = async(req,res)=>{
const {email,password} = req.body;

// finding user through his email.
const user = await UserModel.findOne({email});
try {
    
    // Comparing the hashed password
    bcrypt.compare(password, user.password, async(err,result)=>{
        if(err){
            res.status(404).send({message:`Error in comparing password: ${err.message}`});
        }
        if(result){

            // Generating jwt token
            const token = jwt.sign({username:user.username, email:user.email, userId:user._id}, process.env.JWT_SECRET)
            res.status(200).send({message:"Login successful",token:token});
        }
    })

} catch (error) {
    res.status(404).send({message:`Wrong Credentials: ${error.message}`});
}

};


module.exports = userLogin;

