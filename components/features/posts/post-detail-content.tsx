import React, { FC } from "react";

import { PostDetailDescription } from "./components/post-detail-description";
import { PostDetailMedia } from "./components/post-detail-media";

interface PostDetailContentProps {
  description: string;
  media: string[];
}
export const PostDetailContent: FC<PostDetailContentProps> = ({
  description,
  media,
}) => {
  return (
    <div className="col-span-2 col-start-1">
      <PostDetailDescription description={description} />
      <PostDetailMedia media={media} />
    </div>
  );
};
