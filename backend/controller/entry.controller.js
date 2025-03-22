import Entry from "../model/entry.model.js";

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