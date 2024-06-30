import { useMutation } from "@tanstack/react-query";

import { AuthService } from "@/shared";

export const useUpdatePassMutation = () => {
  return useMutation({
    mutationKey: ["updatePassword"],
    mutationFn: AuthService.authControllerPasswordUpdate,
  });
};
