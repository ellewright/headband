import axios from "axios";
import { NewEntry } from "../interfaces/NewEntry";

const baseURL = import.meta.env.VITE_API_BASE_URL;

if (!baseURL) throw new Error("Database URL is required and not defined in environment variables.");

export default axios.create({ baseURL });

export async function addNewEntryToDatabase(entry: NewEntry): Promise<void> {
    const response = await fetch(`${baseURL}/api/entries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    });

    if (!response.ok) throw new Error("Failed to add new entry.");
    return await response.json();
};

export async function fetchAllEntriesfromDatabase() {
    const response = await fetch(`${baseURL}/api/entries`);

    if (!response.ok) throw new Error("Failed to fetch all entries.");
    return await response.json();
};

export async function deleteEntryFromDatabase(id: string) {
    const response = await fetch(`${baseURL}/api/entries/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) throw new Error("Failed to delete entry.");
};