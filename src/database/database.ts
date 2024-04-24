import { IBook } from "../interfaces/books.interface";

export const booksDatabase: IBook[] = [];

let id = 1;

export const generateBookId = () => {
  id++;
  return id;
};
