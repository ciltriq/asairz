import { prisma } from "@/lib/prisma.js";

export const connectDb = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to the database successfully.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
};

export const disconnectDb = async () => {
    await prisma.$disconnect();
};