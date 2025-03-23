import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MONGO_URI is not defined in environment variables.");
        }

        const connection = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error connecting to database: ${error.message}`);
        } else {
            console.error("An unknown error occurred connecting to the database");
        }
        
        process.exit(1);
    };
};