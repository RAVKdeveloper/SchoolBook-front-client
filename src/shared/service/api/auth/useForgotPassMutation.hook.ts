import { useMutation } from "@tanstack/react-query";

import { AuthService } from "@/shared";

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: AuthService.authControllerForgotPass,
  });
};
