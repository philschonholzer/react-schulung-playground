import { useCartStore } from "./use-cart";

export default function CartContent() {
  const cart = useCartStore();
  // const articles = useCartStore((state) => state.articles);
  return (
    <div>
      <h2>Warenkorb</h2>
      <ul>
        {cart.articles.length > 0 ? (
          cart.articles.map((article) => (
            <li key={article.id}>
              {article.name} {article.description}
            </li>
          ))
        ) : (
          <li>Der Warenkorb ist leer</li>
        )}
      </ul>
      {cart.total > 0 && <div>{cart.total}</div>}
    </div>
  );
}
