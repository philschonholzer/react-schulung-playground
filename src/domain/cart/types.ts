import type { Article } from "../article/types";

export type Cart = {
  articles: Article[];
  total: number;
};
