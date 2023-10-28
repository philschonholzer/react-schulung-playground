import type { Article } from "../../domain/article/types";
import { addArticle } from "../cart/use-cart";

export default function Article(props: { article: Article }) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded border border-blue-200 bg-blue-50 p-4 md:flex-row md:items-end">
      <div>
        <div className="font-semibold">{props.article.name}</div>
        <div>{props.article.description}</div>
        <div>CHF {props.article.price}</div>
      </div>
      <button
        className="rounded bg-blue-900 px-6 py-1 text-white"
        onClick={() => addArticle(props.article)}
      >
        Add to cart
      </button>
    </div>
  );
}
