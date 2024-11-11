export type AuthModalActivateType = "heart" | "message" | "repost" | "send"; // Las claves posibles

export interface AuthModal {
  title: string;
  description: string;
  icon: AuthModalActivateType;
  iconColor: string;
  textButton: string;
  iconButton: AuthModalActivateType;
}
