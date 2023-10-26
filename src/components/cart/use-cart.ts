import { create } from "zustand";
import type { Cart } from "../../domain/cart/types";
import type { Article } from "../../domain/article/types";

export const useCartStore = create<Cart>()(() => ({
  articles: [],
  total: 0,
}));

export const addArticle = (article: Article) =>
  useCartStore.setState((state) => ({
    articles: [...state.articles, article],
  }));
