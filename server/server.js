const express = require('express');
const colors = require('colors');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 6000;
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://vvtraker:biswajit85@blog-app2.hfxckhs.mongodb.net/?retryWrites=true&w=majority");
        console.log(`MongoDB Connected: ${conn.connection.host}`.green.underline.bold);
    }catch(err){
        console.log(`ERROR: ${err.message}`.bgRed.underline.bold);
        process.exit(1);
    }
}

connectDB();
// app.get("/",(req,res)=>{
//     console.log("api created")
//     res.send("api run");
// })
app.use ('/api/users', require('./routes/userRoutes'));
app.use ('/api/blogs', require('./routes/blogRoutes'));

// if(process.env.NODE_ENV ==="production"){
//     app.use(express.static("frontend/build"));
// }

app.listen(PORT, () => console.info(`Server is running on port ${PORT}`.green.underline.bold));