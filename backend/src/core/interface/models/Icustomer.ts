import { Document, Types } from 'mongoose';

export interface ICustomer extends Document {
  _id: Types.ObjectId;
  phoneNumber: string;
  isVerified: boolean;
  role: 'customer'; // Literal type for strictness
  profile?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  authMetadata?: {
    otp?: string;
    otpExpires?: Date;
    lastLogin?: Date;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}