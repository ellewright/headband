import express from "express";
import { getAllEntries } from "../controller/entry.controller";

const router = express.Router();

router.get("/", getAllEntries);

export default router;