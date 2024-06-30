import { useQuery } from "@tanstack/react-query";

import { AuthService } from "@/shared";

export const useMeQuery = () => {
  return useQuery({
    queryKey: ["getMe"],
    queryFn: AuthService.authControllerMe,
  });
};
