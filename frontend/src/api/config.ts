import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

if (!baseURL) throw new Error("Database URL is required and not defined in environment variables.");

export default axios.create({ baseURL });

export async function fetchAllEntriesfromDatabase() {
    const response = await fetch(`${baseURL}/api/entries`);

    if (!response.ok) throw new Error("Failed to fetch all entries.");
    return await response.json();
};