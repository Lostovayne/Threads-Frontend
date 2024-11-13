import {
  LoginFormSchema,
  LoginFormSchemaType,
} from "@/schemas/login-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LoginFormSchemaType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormSchemaType) {
    // TODO: Llamar action/api : simula llamada
    setIsLoading(true);
    setTimeout(() => {
      console.log(values);
      setIsLoading(false);
    }, 1000);
  }

  return {
    form,
    onSubmit,
    isLoading,
  };
};
