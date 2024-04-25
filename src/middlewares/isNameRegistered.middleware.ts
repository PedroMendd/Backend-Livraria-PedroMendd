import { AppError } from "../errors/appError";
import { booksDatabase } from "../database/database";
import { NextFunction, Request, Response } from "express";

export class IsNameRegistered {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (booksDatabase.some((book) => book.name === req.body.name)) {
      throw new AppError(409, "Book already registered.");
    }
    next();
  }
}
