const jwt = require('jsonwebtoken');

const  auth = function(req, res, next){

    // Check for the token
    const token = req.header('x-auth-token');

    // Check if not token
    if(!token) return res.status(401).json([{message: 'No token, authorization denied', type: 'error'}]);

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json([{message: '', type: 'error'}]);
    }
}
module.exports=auth;
// const jwt=require('jsonwebtoken')
// const Data1=require("../models/User");
// const auth=async(req,res,next)=>{
//     const token = req.header('x-auth-token');
// try{
    
// const data=await Data1.findOne({username:token})
// if(data){
//     console.log("user authentication")
    
//     next()
// }
// }catch(err){
// console.log(err)
// res.send("error")
// }
// }

// module.exports=auth;