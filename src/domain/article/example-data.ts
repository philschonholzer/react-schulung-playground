import type { Article } from "./types";

export const makeArticle = (override: Partial<Article> = {}): Article => {
  return {
    id: 1,
    name: "T-Shirt",
    description: "Blau",
    price: 20,
    ...override,
  };
};
