const Register= require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const colors = require('colors');

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
const registerUser = async (req, res) => {
    try{
        const { username } = req.body;
        let toasts = [];

        if(!username) toasts.push({message: 'First name is required', type: 'error'});

        if(toasts.length > 0) return res.status(400).json(toasts);

        let newUser = await Register.findOne({username});

        newUser = new Register(req.body);



        await newUser.save();


        const payload = {
            user: {
                id: newUser._id
            }
        }

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn:"2 days"
        }, (err, token) => {
            if(err) throw err;
            res.json(token);
        })

    }catch(err){
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }
}





module.exports = {
    registerUser
}