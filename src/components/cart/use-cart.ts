import type { Article } from "../../domain/article/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getCart = async () => {
  console.log("getting cart...");

  const data = await fetch("http://127.0.0.1:3004/cart");
  const cart = await data.json();
  console.log("got cart!");
  return cart as { articles: Article[] };
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
        articles: [newArticle, ...(existingArticles ?? [])],
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

  const cart = queryClient.getQueryData(["cart"]) as
    | {
        articles: Article[];
      }
    | undefined;
  // Mutations
  const mutation = useMutation({
    mutationFn: updateCart(cart?.articles),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return {
    query,
    mutation,
  };
}
