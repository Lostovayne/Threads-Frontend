'use client'

import { FC, ReactElement } from "react";

import ReactionButton from "./components/reaction-button";
import HeartIcon from "./icons/heart";
import MessageIcon from "./icons/message";
import RepostIcon from "./icons/repost";
import SendIcon from "./icons/send";
import { PostViewReactions } from "@/interfaces/post/post-view.interface";
import { Format } from "@/lib/format";
import { AuthRegistrationModal } from "../auth/auth-registration-modal";

export const PostReactions: FC<PostViewReactions> = (reactions): ReactElement => {
  const { likes, comments, reposts, shares } = reactions;
  
  return (
    <div className="pt-3 pb-2 flex w-1/3 items-center gap-1 ">
      <ReactionButton onClick={() => 
        console.log("Me Gusta")
      }>
        <HeartIcon /> {Format.numberReactions(likes)}
      </ReactionButton>
      <ReactionButton onClick={() => console.log("Comentar")}>
        <MessageIcon /> {Format.numberReactions(comments)}
      </ReactionButton>
      <ReactionButton>
        <RepostIcon /> {Format.numberReactions(reposts)}
      </ReactionButton>
      <ReactionButton>
        <SendIcon /> {Format.numberReactions(shares)}
      </ReactionButton>
    </div>
  );
};
