import mongoose from "mongoose";
import Entry from "../model/entry.model";
import { Request, Response } from "express";

const statusCodes = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500
};

export async function createNewEntry(req: Request, res: Response): Promise<void> {
    const newEntry = new Entry(req.body);

    if (!newEntry.title) {
        res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: "Please provide a name for the new entry."
        });
    };

    try {
        await newEntry.save();
        res.status(statusCodes.CREATED).json({
            success: true,
            message: "Entry created successfully.",
            data: newEntry
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error in creating new entry: ${error.message}`);
            res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: `Server error in creating new entry: ${error.message}`
            });
        } else {
            console.error("An unknown error occurred in creating new entry.");
            res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "An unknown error occurred in creating new entry."
            });
        };
    };
};

export async function getAllEntries(req: Request, res: Response): Promise<void> {
    try {
        const entries = await Entry.find({});
        res.status(statusCodes.OK).json({
            success: true,
            message: "Successfully fetched all entries.",
            data: entries
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error in fetching all entries: ${error.message}`);
            res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Server error in fetching all entries"
            });
        } else {
            console.error("An unknown error occurred in fetching all entries.");
            res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "An unknown error occurred in fetching all entries."
            });
        };
    };
};

export async function updateEntry(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updatedEntry = req.body;

    if (!updatedEntry.title) {
        res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: "Please provide a name for the updated entry."
        });
    };

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: "Please provide a valid ID to update."
        });
    };

    try {
        const entryToUpdate = await Entry.findByIdAndUpdate(id, updatedEntry, { new: true });
        res.status(statusCodes.OK).json({
            success: true,
            message: "Entry updated successfully.",
            body: entryToUpdate
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error in updating entry: ${error.message}`);
            res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: `Error in updating entry: ${error.message}`
            });
        } else {
            console.error("An unknown error occurred in updating entry.");
            res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "An unknown error occurred in updating entry."
            });
        };
    };
};

export async function deleteEntry(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            message: "Please provide a valid ID to delete."
        });
    };

    try {
        await Entry.findByIdAndDelete(id);
        res.status(statusCodes.NO_CONTENT).send();
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error in deleting entry: ${error.message}`);
            res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: `Server error in deleting entry: ${error.message}`
            });
        } else {
            console.error("An unknown error occurred in updating entry.");
            res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "An unknown error occurred in updating entry."
            });
        };
    };
};