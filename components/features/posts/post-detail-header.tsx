import { Button } from "@/components/ui/button";
import { PostView } from "@/interfaces/post/post-view.interface";
import { FC } from "react";

import { PostDetailtHeaderInfo } from "./components/post-detail-header-info";
import MoreIcon from "./icons/more";
import { PostDetailHeaderImage } from "./components/post-detail-header-image";

export const PostDetailHeader: FC<PostView> = (post) => {
  const { urlProfile, name, date, description, media } = post;

  return (
    <>
      <div className="overflow-hidden break-words pt-1">
        <PostDetailHeaderImage urlProfile={urlProfile} />
      </div>
      <div className="overflow-hidden break-words">
        <div className="flex items-center justify-between">
          <PostDetailtHeaderInfo name={name} date={date} />
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
