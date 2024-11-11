import Heart from "@/components/features/posts/icons/heart";
import Message from "@/components/features/posts/icons/message";
import Repost from "@/components/features/posts/icons/repost";
import Send from "@/components/features/posts/icons/send";
import { AuthModal, AuthModalActivateType } from "@/interfaces/auth/auth-modal.interface";


export const ICON_MAP: Record<AuthModalActivateType, React.FC> = {
  heart: Heart,
  message: Message,
  repost: Repost,
  send: Send,
};

export const AUTH_MODAL_INFO: Record<AuthModalActivateType, AuthModal> = {
  heart: {
    title: "Regístrate para indicar que te gusta",
    description: "Únete a Threads para interactuar con publicaciones e indicar que te gustan.",
    icon: "heart",
    iconColor: "text-red-500",
    textButton: "Continuar con Instagram ",
    iconButton: "heart",
  },
  message: {
    title: "Regístrate para responder",
    description: "Únete a Threads para participar en la conversación.",
    icon: "message",
    iconColor: "text-red-500",
    textButton: "Continuar con Instagram ",
    iconButton: "message",
  },
  repost: {
    title: "Regístrate para volver a publicar",
    description: "Únete a Threads para compartir esto en tu perfil.",
    icon: "repost",
    iconColor: "text-red-500",
    textButton: "Continuar con Instagram ",
    iconButton: "repost",
  },
  send: {
    title: "Regístrate para enviar",
    description: "Únete a Threads para interactuar con publicaciones e indicar que te gustan.",
    icon: "send",
    iconColor: "text-red-500",
    textButton: "Continuar con Instagram ",
    iconButton: "send",
  },
};
