const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");

const User = require("../models/user");

const { SECRET_KEY } = process.env;
const authenticate = async (req, res, next) => {
    const { autorization = "" } = req.headers;
    const [bearer, token] = autorization.split(" ");
    if (bearer !== "bearer")
    {
        next(HttpError(401))
    }
    try { 
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user) { 
           next(HttpError(401))  
        }
        next();
    }
    catch {
        next(HttpError(401));
     }
} 

module.exports = authenticate;