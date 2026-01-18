import crypto from 'crypto';
import { START_INTERVAL, END_INTERVAL } from '@/constants/index.js';

export const generateOTP = (): string => {
    return crypto.randomInt(Number(START_INTERVAL), Number(END_INTERVAL)).toString();
};