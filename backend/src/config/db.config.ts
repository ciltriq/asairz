import mongoose from "mongoose";
import { logger } from "@/utils/index.js";
import { env } from "./index.js";

export async function connectDb() {
    try {
        await mongoose.connect(env.DATABASE_URL as string);
        logger.info("MongoDB connected successfully");
    } catch (error) {
        logger.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

export const disconnectDb = async () => {
    await mongoose.disconnect();
};