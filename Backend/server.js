import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();



const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json());
// app.get("/", (req, res) => {
//     res.send("Hello, this is server home page.");

// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


// app.get("/api/auth/signup", (req,res) => {
//     console.log("signup route");
//     res.send("Signup");
// });
// app.get("/api/auth/login", (req,res) => {
//     console.log("Login route");
// });
// app.get("/api/auth/logout", (req,res) => {
//     console.log("Logout route");
// });

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)

});