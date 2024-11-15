"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useLoginForm } from "@/hooks/auth/use-login-form";
import ThreadsComponent from "@/components/common/icons/threads-icon";
import { InstagramRedirectButton } from "@/components/common/buttons/instagram-redirect-button";
import { InputFieldForm } from "@/components/common/form/input-field-form";
import ReactionButton from "../posts/components/reaction-button";

export const LoginForm: FC = () => {
  const { form, onSubmit, isLoading } = useLoginForm();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="text-md flex min-h-screen justify-center bg-background px-7 py-3 text-foreground">
      <div className="w-full max-w-[400px] space-y-8">
        <div className="flex items-center justify-center">
          <ReactionButton onClick={handleBack}>
          <ArrowLeft className="size-[1.5rem] " />
            </ReactionButton> 
          <ThreadsComponent className="mx-auto size-[1.9rem]" />
        </div>

        <h1 className="pt-12 text-center font-bold">
          Inicia sesión con tu cuenta de Instagram
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 px-3">
            <InputFieldForm
              control={form.control}
              name="username"
              flexDirection="column"
              placeholder="Nombre de usuario, teléfono o correo electrónico"
              className="h-12 border-zinc-700 bg-foreground/[0.02] text-sm"
            />

            <InputFieldForm
              control={form.control}
              name="password"
              type="password"
              flexDirection="column"
              placeholder="Contraseña"
              className="h-12 border-zinc-700 bg-foreground/[0.02] text-sm"
            />

            <Button
              type="submit"
              className="h-12 w-full bg-background text-foreground invert hover:bg-white/90 py-7 rounded-xl"
              disabled={isLoading}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
          </form>
        </Form>

        <div className="text-center">
          <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-300">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Separator className="flex-1 bg-zinc-700" />
          <span className="text-sm text-zinc-500">o</span>
          <Separator className="flex-1 bg-zinc-700" />
        </div>

        <InstagramRedirectButton textButton="Continuar con Instagram" />
      </div>
    </div>
  );
};
