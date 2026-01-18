import app from "./app.js";
import { env, connectDb, disconnectDb } from "@/config/index.js";
import { logger } from "@/utils/index.js";
import { Server } from "node:http";

const startServer = async () => {
  await connectDb();
  const server = app.listen(env.PORT, "0.0.0.0", () => {
    logger.info(`Server is running on port ${env.PORT}`);
  });

  process.on("unhandledRejection", (reason, promise) => {
    logger.error("Unhandled Rejection at:", promise, "reason:", reason);
    server.close(async () => {
      await disconnectDb();
      process.exit(1);
    });
  });
  
  process.on("uncaughtException", (error) => {
    logger.error("Uncaught Exception:", error);
    process.exit(1);
  });

  process.on("SIGTERM", async () => {
    logger.info("SIGTERM received. Shutting down gracefully..."); 
    server.close(async () => {
      await disconnectDb();
      process.exit(0);
    });
  });
};

startServer().catch((error) => {
  logger.error("Error starting server:", error);
});
