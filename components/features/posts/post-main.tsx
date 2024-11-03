import { Card, CardContent } from "@/components/ui/card";
import { PostView } from "@/interfaces/post/post-view.interface";
import { FC } from "react";

import { Post } from "./post";
import { PostReactions } from "./post-reactions";

export const PostMain: FC<PostView> = (post) => {
  const { reactions, ...rest } = post;
  return (
    <Card className="border-none shadow-none">
      <CardContent className="grid grid-cols-[55px_1fr] gap-x-1 p-0">
        <Post {...rest} />
        <div className="col-start-2">
          <PostReactions {...reactions} />
        </div>
      </CardContent>
    </Card>
  );
};
