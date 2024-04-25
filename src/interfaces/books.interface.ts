export interface IBook {
  id: number;
  name: string;
  pages: number;
  category?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type TBookBody = Omit<IBook, "id" | "createdAt" | "updateAt">;
export type TBookPartial = Partial<TBookBody>;
