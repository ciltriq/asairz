import express from 'express';
import cors from 'cors';
import doten from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

doten.config();

// validate env
import {validateEnv} from '@/utils/index.js';
validateEnv();

// configs
import {connectDb, env} from '@/config/index.js';

// middlewares
import {errorHandler} from '@/middleware/index.js';

//routes


const app = express();

app.use(
    cors({
        origin: env.CLIENT_URL,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-token-version'],
    }),
);

app.use(cookieParser());
app.use(morgan("dev"));

connectDb();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(errorHandler);



export default app;