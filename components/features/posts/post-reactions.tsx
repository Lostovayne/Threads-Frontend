import { FC, ReactElement } from "react";

import ReactionButton from "./components/reaction-button";
import HeartIcon from "./icons/heart";
import MessageIcon from "./icons/message";
import RepostIcon from "./icons/repost";
import SendIcon from "./icons/send";

interface PostReactionsProps {
  likes?: number;
  comments?: number;
  reposts?: number;
  shares?: number;
}

export const PostReactions: FC<PostReactionsProps> = ({
  likes,
  comments,
  reposts,
  shares,
}): ReactElement => {
  return (
    <div className="mt-1.5 flex w-1/3 items-center gap-1">
      <ReactionButton>
        <HeartIcon /> 10
      </ReactionButton>
      <ReactionButton>
        <MessageIcon />
      </ReactionButton>
      <ReactionButton>
        <RepostIcon />
      </ReactionButton>
      <ReactionButton>
        <SendIcon />
      </ReactionButton>
    </div>
  );
};
