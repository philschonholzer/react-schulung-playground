import { create } from "zustand";
import type { Article } from "../../domain/article/types";
import {
  addArticleToExistingArticles,
  calculateTotalPriceFromArticles,
} from "../../domain/cart";

type Cart = {
  articles: Article[];
};

const useCartStore = create<Cart>()(() => ({
  articles: [],
}));

export const useArticles = () => useCartStore((state) => state.articles);

export const useTotalPrice = () =>
  useCartStore((state) => calculateTotalPriceFromArticles(state.articles));

export const addArticle = (article: Article) =>
  useCartStore.setState((state: Cart) => ({
    articles: addArticleToExistingArticles(state.articles, article),
  }));
