import { makeArticle } from "../../domain/article/example-data";
import type { Article as ArticleType } from "../../domain/article/types";
import Article from "./article";
const articles = (await fetch("http://localhost:3004/articles").then(
  (response) => response.json(),
)) as ArticleType[];

export default function ArticleList() {
  return (
    <ul className="space-y-2 ">
      {articles.map((article) => (
        <li className="" key={article.id}>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
}
