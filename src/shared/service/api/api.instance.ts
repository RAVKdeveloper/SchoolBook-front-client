import { QueryClient } from "@tanstack/react-query";

import { OpenAPI } from "@/shared/service/client";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

OpenAPI.BASE = process.env.NEXT_PUBLIC_SERVER_URL as string;
OpenAPI.WITH_CREDENTIALS = true;
