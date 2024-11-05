import { FC } from "react";
import { Button } from "@/components/ui/button";
import MoreIcon from "./icons/more";

import { PostView } from "@/interfaces/post/post-view.interface";
import { PostDetailProfileImage } from "./components/post-detail-profile-image";
import { PostDetailtHeader } from "./components/post-detail-header";
import { PostDetailDescription } from "./components/post-detail-description";
import { PostDetailMedia } from "./components/post-detail-media";

export const PostDetail: FC<PostView> = (post) => {
  const { urlProfile, name, date, description, media } = post
  
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
        <div className="">
          <div className="">
            <PostDetailDescription description={description} />
            <PostDetailMedia media={media} />
          </div>
        </div>
      </div>
    </>
  );
};
