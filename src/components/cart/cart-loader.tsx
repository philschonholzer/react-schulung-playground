import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartContent from "./cart-content";
import { useQueryClientStore } from "../../stores/use-query-client-store";

export default function Cart() {
  const { queryClient } = useQueryClientStore();

  return (
    <QueryClientProvider client={queryClient}>
      <CartContent />
    </QueryClientProvider>
  );
}
