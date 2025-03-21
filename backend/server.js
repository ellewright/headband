import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
    connectDB();
    console.log("Server started: http://localhost:5000");
});