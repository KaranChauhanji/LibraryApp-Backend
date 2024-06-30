const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000
const app = express();


// Health check route 
app.get('/',(_,res)=>{
    res.status(200).send("Heath Checked server working fine.")
});




// Listening to the port
app.listen(PORT,async()=>{
    try {
        await
        console.log("Server is Running and DB is Connected.")
    } catch (error) {
        console.log(error.message);
    }
})
