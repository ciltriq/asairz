import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';
import { env } from "@/config/env.config.js";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { logger } from "./index.js";

export interface S3File {
  originalname: string;
  buffer: Buffer;
  mimetype: string;
}
export type S3Folder = 'licenses' | 'vehicles';


// Configure AWS S3
const s3Client = new S3Client({
    region: env.AWS_REGION,
    credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY!,
    },
});

/**
 * Upload file to S3
 * Returns ONLY the key (store this in DB)
 */
async function uploadToS3(
  file: S3File,
  folder: S3Folder,
  userId?: string
): Promise<{ key: string }> {
  const fileExtension = file.originalname.split('.').pop();
  const fileKey  = `${folder}/${uuidv4()}.${fileExtension}`;


  await s3Client.send(
    new PutObjectCommand({
      Bucket: env.S3_BUCKET_NAME,
      Key: fileKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
  );

  logger.info(`Uploaded: ${fileKey}`);
  return { key: fileKey };
}

/**
 * Generates a new signed URL for an existing S3 URL
 */
async function generateSignedUrl(fileKey: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: env.S3_BUCKET_NAME!,
    Key: fileKey,
  });

  return getSignedUrl(s3Client, command, { expiresIn: 60 * 15 }); // 15 minutes
}


/**
 * Deletes a file from S3 by its key
 */
async function deleteFromS3(fileKey: string): Promise<void> {
  const command = new DeleteObjectCommand({
    Bucket: env.S3_BUCKET_NAME!,
    Key: fileKey,
  });

  await s3Client.send(command);
  logger.info(`Deleted file: ${fileKey}`);
}

export { uploadToS3, generateSignedUrl, deleteFromS3 };