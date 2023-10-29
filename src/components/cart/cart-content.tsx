import useCart from "./use-cart";

export default function CartContent() {
  const { query } = useCart();
  if (query.isLoading) {
    return <div>Lade Warenkorb...</div>;
  }
  if (query.error) {
    return <div>Fehler</div>;
  }
  return (
    <div>
      <h2 className="text-xl font-bold">Warenkorb</h2>
      <ul>
        {query.data && query.data.articles.length > 0 ? (
          query.data.articles.map((article) => (
            <li key={article.id}>
              {article.name} {article.description}
            </li>
          ))
        ) : (
          <li>Der Warenkorb ist leer</li>
        )}
      </ul>
    </div>
  );
}
