import mongoose from "mongoose";
import Entry from "../model/entry.model.js";

const statusCodes = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500
};

export async function createNewEntry(req, res) {
    const newEntry = new Entry(req.body);

    if (!newEntry.name) {
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: "Please provide a name for the new entry."
        });
    };

    try {
        await newEntry.save();
        return res.status(statusCodes.CREATED).json({
            success: true,
            message: "Entry created successfully.",
            data: newEntry
        });
    } catch (error) {
        console.error(`Error in creating new entry: ${error.message}`);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: `Server error in creating new entry: ${error.message}`
        });
    };
};

export async function getAllEntries(req, res) {
    try {
        const entries = await Entry.find({});
        res.status(statusCodes.OK).json({
            success: true,
            message: "Successfully fetched all entries.",
            data: entries
        });
    } catch (error) {
        console.error(`Error in fetching all entries: ${error.message}`);
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Server error in fetching all entries"
        });
    };
};

export async function updateEntry(req, res) {
    const { id } = req.params;
    const updatedEntry = req.body;

    if (!updatedEntry.name) {
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: "Please provide a name for the updated entry."
        });
    };

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: "Please provide a valid ID to update."
        });
    };

    try {
        const entryToUpdate = await Entry.findByIdAndUpdate(id, updatedEntry, { new: true });
        return res.status(statusCodes.OK).json({
            success: true,
            message: "Entry updated successfully.",
            body: entryToUpdate
        });
    } catch (error) {
        console.error(`Error in updating entry: ${error.message}`);
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: `Error in updating entry: ${error.message}`
        });
    };
};

export async function deleteEntry(req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: "Please provide a valid ID to delete."
        });
    };

    try {
        await Entry.findByIdAndDelete(id);
        res.status(statusCodes.NO_CONTENT);
    } catch (error) {
        console.error(`Error in deleting entry: ${error.message}`);
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: `Server error in deleting entry: ${error.message}`
        });
    };
};