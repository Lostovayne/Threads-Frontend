import { Button } from "@/components/ui/button";
import { PostView } from "@/interfaces/post/post-view.interface";
import { FC } from "react";

import { PostDetailDescription } from "./components/post-detail-description";
import { PostDetailtHeader } from "./components/post-detail-header";
import { PostDetailMedia } from "./components/post-detail-media";
import { PostDetailProfileImage } from "./components/post-detail-profile-image";
import MoreIcon from "./icons/more";

export const PostDetail: FC<PostView> = (post) => {
  const { urlProfile, name, date, description, media } = post;

  return (
    <>
      <div className="overflow-hidden break-words pt-1">
        <PostDetailProfileImage urlProfile={urlProfile} />
      </div>
      <div className="overflow-hidden break-words">
        <div className="flex items-center justify-between">
          <PostDetailtHeader name={name} date={date} />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full [&_svg]:size-5"
          >
            <MoreIcon />
          </Button>
        </div>
      </div>
        
    </>
  );
};
