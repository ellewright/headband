import express from "express";
import { createNewEntry, deleteEntry, getAllEntries } from "../controller/entry.controller.js";

const router = express.Router();

router.post("/", createNewEntry);
router.get("/", getAllEntries);
router.delete("/:id", deleteEntry);

export default router;