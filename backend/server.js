import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import entryRouter from "./route/entry.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/entries", entryRouter);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started: http://localhost:5000");
});