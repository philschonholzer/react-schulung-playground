import type { Article } from "../../domain/article/types";
import { addArticle } from "../cart/use-cart";

export default function Article(props: { article: Article }) {
  return (
    <div className="border border-blue-500 rounded bg-blue-900 p-4">
      <div>{props.article.name}</div>
      <div>{props.article.description}</div>
      <div>{props.article.price}</div>
      <button
        className="rounded bg-white text-blue-900 px-6 py-1"
        onClick={() => addArticle(props.article)}
      >
        Add to cart
      </button>
    </div>
  );
}
