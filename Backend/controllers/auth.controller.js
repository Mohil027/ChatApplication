import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req, res) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match."})
        }
        const user = await User.findOne({userName});
        if(user){
            return res.status(400).json({error:"Username already exists"})

        }
        const salt = await bcrypt.genSalt(10); 

        const hashedPassword = await bcrypt.hash(password, salt);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        // const profilePic = gender === "male" ? "https://avatar.iran.liara.run/public/boy" : "https://avatar.iran.liara.run/public/girl";

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
            token: null
        });
        await newUser.save();

        res.status(200).json(newUser);
        

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
        
    }
    
};

export const login = async (req, res) => {
    
    try {
        const {userName, password} = req.body;
        const user = await User.findOne({userName});
        if(!user){
            return res.status(400).send("User does not exit");
        }
        const match = await bcrypt.compare(password, user?.password || "");
        if(!match){
            res.status(400).send("Password doesn't match");
        }
        const payload = {
            id: user._id,
            userName: user.userName
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '15d'});
        user.token = token;
        await user.save();

        const cookieOptions = {
            httpOnly: true,    
            secure: process.env.NODE_ENV === 'production',      
            sameSite: 'Strict',
            maxAge: 15*24*60*60*1000   
        };

        res.cookie('token', token, cookieOptions);
        res.status(201).json({
            status: 'success',
            token,
            data: {
              user,
            },
          });
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error.");

        
    }


};
export const logout = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        if(!user){
            return res.status(400).send("User is not logged in/user does not exist");

        }
        user.token = null;
        await user.save();
        res.clearCookie('token');
        res.status(200).json({message: "User logged out successfully"});

        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error.");
        
    }
}