import type { Article } from "../../domain/article/types";

export default function Article(props: { article: Article }) {
  return (
    <div className="border rounded bg-blue-950 p-4">
      <div>{props.article.name}</div>
      <div>{props.article.description}</div>
      <div>{props.article.price}</div>
    </div>
  );
}
