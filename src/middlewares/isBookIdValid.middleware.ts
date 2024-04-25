import { AppError } from "../errors/appError";
import { booksDatabase } from "../database/database";
import { NextFunction, Request, Response } from "express";

export class IsBookIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (!booksDatabase.some((book) => book.id === Number(req.params.id))) {
      throw new AppError(404, "Book not found.");
    }
    next();
  }
}
