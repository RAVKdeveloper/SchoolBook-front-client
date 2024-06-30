import { AuthService, queryClient } from "@/shared";

export const getMeQuery = async () => {
  const data = await queryClient.fetchQuery({
    queryKey: ["getMe"],
    queryFn: async () => {
      try {
        await AuthService.authControllerMe();
      } catch {}
    },
  });

  console.log(data);

  return data;
};
