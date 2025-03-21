import Entry from "../model/entry.model";

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