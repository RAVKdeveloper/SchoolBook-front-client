import { useMutation } from "@tanstack/react-query";

import { AuthService } from "@/shared";

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ["loginUser"],
    mutationFn: AuthService.authControllerLogin,
  });
};
