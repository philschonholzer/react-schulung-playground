import { useArticles, useTotalPrice } from "./use-cart";

export default function CartContent() {
  const price = useTotalPrice();
  const articles = useArticles();
  return (
    <div>
      <h2 className="text-xl font-bold">Warenkorb</h2>
      <ul>
        {articles.length > 0 ? (
          articles.map((article) => (
            <li key={article.id}>
              {article.name} {article.description}
            </li>
          ))
        ) : (
          <li>Der Warenkorb ist leer</li>
        )}
      </ul>
      {price > 0 && <div>CHF {price}</div>}
    </div>
  );
}
