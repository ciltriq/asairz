import { env } from "@/config/index.js";

// List of valid AWS regions
const VALID_AWS_REGIONS = [
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
  "ap-south-1",
  "ap-south-2",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-northeast-1",
  "eu-west-1",
  "eu-west-2",
  "eu-west-3",
  "eu-central-1",
];

export const validateEnv = () => {
  if (!env.PORT) {
    throw new Error("PORT is not defined in the environment variables");
  }
  if (!env.DATABASE_URL) {
    throw new Error("PROSSGRESS_URL is not defined in the environment variables");
  }
  if (!env.JWT_ACCESS_SECRET) {
    throw new Error(
      "JWT_ACCESS_SECRET is not defined in the environment variables"
    );
  }
  if (!env.JWT_REFRESH_SECRET) {
    throw new Error(
      "JWT_REFRESH_SECRET is not defined in the environment variables"
    );
  }

};
