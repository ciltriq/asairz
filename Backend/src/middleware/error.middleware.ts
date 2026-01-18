import { Request, Response, NextFunction } from "express";
import { HttpError, logger } from "@/utils/index.js";
import { HttpStatus, HttpResponse } from "@/constants/index.js";

export const errorHandler = (
    err: HttpError | Error,
    _req: Request,
    res: Response,
    next: NextFunction,
) => {
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let message:string = HttpResponse.SERVER_ERROR;
    if (err instanceof HttpError) {
      logger.error("Errors:", err);
        statusCode = err.statusCode;
        message = err.message;
    }else{
        logger.error("unhandled error:", err);
    }
    if (res.headersSent) {
        return next(err);
    }
    res.status(statusCode).json({error: message});
};