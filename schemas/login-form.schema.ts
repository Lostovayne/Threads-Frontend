import { z } from "zod";

export const LoginFormSchema = z.object({
  username: z.string().min(1, {
    message: "El nombre de usuario es requerido.",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;
