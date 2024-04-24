import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsNameRegistered } from "../middlewares/isNameRegistered.middleware";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/", IsNameRegistered.execute, booksControllers.create);

booksRouter.get("/", booksControllers.getMany);

booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.getOne);

booksRouter.patch(
  "/:id",
  IsBookIdValid.execute,
  IsNameRegistered.execute,
  booksControllers.update
);

booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.delete);
