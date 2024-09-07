import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.cookie?.split("=")[1] || req.headers.authorization?.split(' ')[1];
        console.log('Token received:', token);
        if(!token){
            return res.status(401).json({ error: "No token provided." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ error: "Invalid token." });
        }

        next();
        
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Authentication failed." });
        
    }
}