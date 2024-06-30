"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, ReactNode } from "react";

import { queryClient } from "@/shared";

interface Props {
  children: ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={Boolean(process.env.NEXT_PUBLIC_IS_DEV_MODE) ?? false}
      />
    </QueryClientProvider>
  );
};
