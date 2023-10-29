import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { Article as ArticleType } from "../../domain/article/types";
import Article from "./article";
import { useQueryClientStore } from "../../stores/use-query-client-store";

const articles = (await fetch("http://127.0.0.1:3004/articles").then(
  (response) => response.json(),
)) as ArticleType[];

export default function ArticleList() {
  const { queryClient } = useQueryClientStore();

  return (
    <QueryClientProvider client={queryClient}>
      <ul className="space-y-2 ">
        {articles.map((article) => (
          <li className="" key={article.id}>
            <Article article={article} />
          </li>
        ))}
      </ul>
    </QueryClientProvider>
  );
}
