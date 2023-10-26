import { makeArticle } from "../../domain/article/example-data";
import Article from "./article";

export default function ArticleList() {
  const articles = [
    makeArticle(),
    makeArticle({ id: 2, description: "Rot" }),
    makeArticle({ id: 3, description: "Grün" }),
  ];

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
