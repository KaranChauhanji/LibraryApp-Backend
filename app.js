const express = require('express');
const connection = require('./config/db')
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use('/user',userRouter)

// Health check route 
app.get('/',(_,res)=>{
    res.status(200).send("Heath Checked server working fine.")
});




// Listening to the port
app.listen(PORT,async()=>{
    try {
       await connection;
        console.log("Server is Running and DB is Connected.")
    } catch (error) {
        console.log(error.message);
    }
})
