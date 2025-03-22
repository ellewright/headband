import express from "express";
import { createNewEntry, getAllEntries, updateEntry, deleteEntry } from "../controller/entry.controller.js";

const router = express.Router();

router.post("/", createNewEntry);
router.get("/", getAllEntries);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);

export default router;