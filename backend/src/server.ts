import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import entryRouter from "./router/entry.router"

const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("No port defined in environment variables.");
}

app.use(express.json());
app.use(cors());
app.use("/api/entries", entryRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});