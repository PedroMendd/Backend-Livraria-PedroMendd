export interface IBook {
  id: number;
  name: string;
  pages: number;
  category?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type TBookBody = Pick<IBook, "name" | "pages" | "category">;
export type TBookPartial = Partial<TBookBody>;
