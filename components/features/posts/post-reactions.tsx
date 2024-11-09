"use client";

import { PostViewReactions } from "@/interfaces/post/post-view.interface";
import { Format } from "@/lib/format";
import { useAuthModalStore } from "@/store/auth/auth-modal.store";
import { FC, ReactElement } from "react";

import ReactionButton from "./components/reaction-button";
import HeartIcon from "./icons/heart";
import MessageIcon from "./icons/message";
import RepostIcon from "./icons/repost";
import SendIcon from "./icons/send";
import { AuthModalActivateType } from "@/interfaces/auth/auth-modal.interface";
import { AUTH_MODAL_INFO } from "@/lib/constants";

export const PostReactions: FC<PostViewReactions> = (
  reactions
): ReactElement => {
  const setIsOpen = useAuthModalStore((state) => state.setIsOpen);
  const setInfoModal = useAuthModalStore((state) => state.setInfoModal);
  const { likes, comments, reposts, shares } = reactions;

  const showModal = (icon: AuthModalActivateType) => {
    // TODO: validar si no está registrado (un estado mas en AuthModalStore?)
    setInfoModal(AUTH_MODAL_INFO[icon]);
    setIsOpen();
  };

  return (
    <div className="flex w-1/3 items-center gap-1 pb-2 pt-3">
      <ReactionButton
        onClick={() => {
          showModal("heart");
        }}
      >
        <HeartIcon /> {Format.numberReactions(likes)}
      </ReactionButton>

      <ReactionButton
        onClick={() => {
          showModal("message");
        }}
      >
        <MessageIcon /> {Format.numberReactions(comments)}
      </ReactionButton>

      <ReactionButton
        onClick={() => {
          showModal("repost");
        }}
      >
        <RepostIcon /> {Format.numberReactions(reposts)}
      </ReactionButton>

      <ReactionButton
        onClick={() => {
          showModal("send");
        }}
      >
        <SendIcon /> {Format.numberReactions(shares)}
      </ReactionButton>
    </div>
  );
};
