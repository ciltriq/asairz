import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
import { env } from '@/config/env.config.js';

export const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : env.SENDER_EMAIL,
        pass : env.PASSKEY
    },
    tls : {
        rejectUnauthorized : false,
    }
});
