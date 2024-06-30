import { z } from "zod";

import { useTranslations } from "next-intl";

export const useSchemaLoginForm = () => {
  const t = useTranslations();

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(100),
  });

  return schema;
};
