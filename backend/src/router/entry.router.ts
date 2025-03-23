import express from "express";
import { createNewEntry, deleteEntry, getAllEntries, updateEntry } from "../controller/entry.controller";

const router = express.Router();

router.post("/", createNewEntry);
router.get("/", getAllEntries);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);

export default router;