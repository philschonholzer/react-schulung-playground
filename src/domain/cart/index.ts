import type { Article } from "../article/types";

export function addArticleToExistingArticles(
  existingArticles: Article[],
  newArticle: Article,
): Article[] | undefined {
  return [...existingArticles, newArticle];
}

export function calculateTotalPriceFromArticles(articles: Article[]): number {
  return articles.reduce((sum, cur) => sum + cur.price, 0);
}
