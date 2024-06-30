import { useMutation } from "@tanstack/react-query";

import { AuthService } from "@/shared";

export const useVerifyAuthCodeMutation = () => {
  return useMutation({
    mutationKey: ["verifyAuthCode"],
    mutationFn: AuthService.authControllerVerifyAccount,
  });
};
