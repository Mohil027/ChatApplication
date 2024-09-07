import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.headers.cookie?.split("=")[1] || req.headers.authorization?.split(' ')[1];
        console.log('Token received:', token);
        if(!token){
            return res.status(401).json({ error: "No token provided." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({ error: "Invalid token." });
        }
        // req.user = await User.findById(decoded.id);
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ error: "No user found." });
        }
        
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Authentication failed." });
        
    }
}

export default protectRoute;