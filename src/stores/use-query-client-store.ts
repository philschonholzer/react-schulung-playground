import { create } from "zustand";
import { QueryClient } from "@tanstack/react-query";

export const useQueryClientStore = create<{ queryClient: QueryClient }>()(
  () => ({
    queryClient: new QueryClient(),
  }),
);
