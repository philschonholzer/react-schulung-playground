import type { Article } from "../../domain/article/types";
import {
  useMutation,
  useMutationState,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { addArticleToExistingArticles } from "../../domain/cart";

type Cart = {
  articles: Article[];
};

const getCart = async () => {
  console.log("getting cart...");

  const data = await fetch("http://127.0.0.1:3004/cart");
  const cart = await data.json();
  console.log("got cart!");
  return cart as Cart;
};

const updateCart =
  (existingArticles: Article[] | undefined) =>
  async (newArticle: Article): Promise<void> => {
    console.log("updating...", newArticle, existingArticles);

    const data = await fetch("http://127.0.0.1:3004/cart", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articles: addArticleToExistingArticles(
          existingArticles ?? [],
          newArticle,
        ),
      }),
    });

    const response = await data.json();
    console.log("updated!", response);
    return response;
  };

export default function useCart() {
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["cart"], queryFn: getCart });

  const cart = queryClient.getQueryData(["cart"]) as Cart | undefined;
  // Mutations
  const mutation = useMutation({
    mutationFn: updateCart(cart?.articles),
    onSettled: () => {
      // Invalidate and refetch
      return queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    mutationKey: ["cart"],
  });

  const variables = useMutationState<Article>({
    filters: { mutationKey: ["cart"], status: "pending" },
    select: (mutation) => mutation.state.variables as Article,
  });
  return {
    query,
    mutation,
    variables,
  };
}
