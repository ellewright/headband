import express from "express";
import { createNewEntry, getAllEntries } from "../controller/entry.controller.js";

const router = express.Router();

router.post("/", createNewEntry);
router.get("/", getAllEntries);

export default router;