import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

interface IBooksControllers {
  create(req: Request, res: Response): Response;
  getMany(req: Request, res: Response): Response;
  getOne(req: Request, res: Response): Response;
  update(req: Request, res: Response): Response;
  delete(req: Request, res: Response): Response;
}

export class BooksControllers implements IBooksControllers {
  create(req: Request, res: Response): Response {
    const booksServices = new BooksServices();

    const create = booksServices.create(req.body);

    return res.status(201).json(create);
  }

  getMany(req: Request, res: Response): Response {
    const { search, name } = req.query;
    const booksServices = new BooksServices();

    const getMany = booksServices.getMany(search as string, name as string);

    return res.status(200).json(getMany);
  }

  getOne(req: Request, res: Response): Response {
    const booksServices = new BooksServices();

    const getOne = booksServices.getOne(req.params.id);

    return res.status(200).json(getOne);
  }

  update(req: Request, res: Response): Response {
    const booksServices = new BooksServices();

    const update = booksServices.update(req.body, req.params.id);

    return res.status(200).json(update);
  }

  delete(req: Request, res: Response): Response {
    const booksServices = new BooksServices();

    booksServices.delete(req.params.id);

    return res.status(204).json();
  }
}
