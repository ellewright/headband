import mongoose from "mongoose";
import Entry from "../model/entry.model.js";
import { ObjectId } from "mongodb";

// TODO: Store status codes in object, i.e.
// const httpStatusCodes = {
//      OK: 200
// } etc...

export async function createNewEntry(req, res) {
    const newEntry = new Entry(req.body);

    if (!newEntry.name) {
        return res.status(400).json({
            success: false,
            message: "Please provide a name for the new entry."
        });
    };

    try {
        const savedEntry = newEntry.save();
        return res.status(200).json({
            success: true,
            data: newEntry
        });
    } catch (error) {
        console.error(`Error in creating new entry: ${error.message}`);
        return res.status(500).json({
            success: false,
            message: `Server error in creating new entry: ${error.message}`
        });
    };
};

export async function getAllEntries(req, res) {
    try {
        const entries = await Entry.find({});
        res.status(200).json({
            success: true,
            data: entries
        });
    } catch (error) {
        console.error(`Error in fetching all entries: ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Server error in fetching all entries"
        });
    };
};

export async function updateEntry(req, res) {
    const { id } = req.params;
    const updatedEntry = req.body;

    if (!updatedEntry.name) {
        return res.status(400).json({
            success: false,
            message: "Please provide a name for the updated entry."
        });
    };

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid ID to update."
        });
    };

    try {
        const entryToUpdate = await Entry.findByIdAndUpdate(id, updatedEntry, { new: true });
        return res.status(200).json({
            success: true,
            message: "Entry updated successfully.",
            body: entryToUpdate
        });
    } catch (error) {
        console.error(`Error in updating entry: ${error.message}`);
        return res.status(500).json({
            success: false,
            message: `Error in updating entry: ${error.message}`
        });
    };
};

export async function deleteEntry(req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Please provide a valid ID to delete."
        });
    };

    try {
        const entryToDelete = await Entry.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Entry successfully deleted."
        });
    } catch (error) {
        console.error(`Error in deleting entry: ${error.message}`);
        res.status(500).json({
            success: false,
            message: `Server error in deleting entry: ${error.message}`
        });
    };
}