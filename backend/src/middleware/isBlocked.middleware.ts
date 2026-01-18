import { createHttpError } from "@/utils/index.js";
import type { AddedRequest } from "@/middleware/index.js";
import { HttpResponse, HttpStatus } from "../constants/index.js";
// import { UserModel } from "@/models/user.model";
import { NextFunction, Response } from "express";

export function isBlocked() {
  return async (req: AddedRequest, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.id;

      if (!userId) {
        throw createHttpError(
          HttpStatus.UNAUTHORIZED,
          "User ID missing in token."
        );
      }

      // const user = await UserModel.findById(userId);

      // if (user?.isBlocked) {
      //   return next(
      //     createHttpError(HttpStatus.UNAUTHORIZED, HttpResponse.USER_IS_BLOKED)
      //   );
      // }
      return;
      next();
    } catch (error) {
      next(error);
    }
  };
}
