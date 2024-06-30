import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useLoginMutation } from "@/shared";

import { useSchemaLoginForm } from "./useSchemaForm.model";

export const useLoginForm = () => {
  const schema = useSchemaLoginForm();
  type LoginFormType = z.infer<typeof schema>;
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    mode: "all",
    resolver: zodResolver(schema),
  });
  const { mutate } = useLoginMutation();

  const submit: SubmitHandler<LoginFormType> = (data) => {
    mutate({ requestBody: data });
  };

  const errorFields: FormErrorFields<LoginFormType> = {
    email: errors.email?.message,
    password: errors.password?.message,
  };

  const disSubmit = !isValid;

  return {
    control,
    handleSubmit,
    submit,
    errorFields,
    disSubmit,
  };
};
