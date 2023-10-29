import { makeArticle } from "../../domain/article/example-data";
import type { Article as ArticleType } from "../../domain/article/types";
import Article from "./article";

export default function ArticleList(props: { articles: ArticleType[] }) {
  return (
    <ul className="space-y-2 ">
      {props.articles.map((article) => (
        <li className="" key={article.id}>
          <Article article={article} />
        </li>
      ))}
    </ul>
  );
}
