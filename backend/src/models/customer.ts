import { ICustomer } from "@/core/interface/models/Icustomer.js";
import { model, Schema, models } from "mongoose";

const customerSchema = new Schema<ICustomer>({
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    unique: true,
    trim: true,
    index: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ['customer'],
    default: 'customer',
    immutable: true
  },
  profile: {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      sparse: true
    }
  },
  authMetadata: {
    otp: { type: String, select: false },
    otpExpires: { type: Date, select: false },
    lastLogin: Date
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

const CustomerModel = models.Customer || model<ICustomer>('Customer', customerSchema);

export default CustomerModel;