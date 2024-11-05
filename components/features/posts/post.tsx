import { Card, CardContent } from "@/components/ui/card";
import { PostView } from "@/interfaces/post/post-view.interface";
import { FC } from "react";

import { PostDetail } from "./post-detail";
import { PostReactions } from "./post-reactions";

export const Post: FC<PostView> = (post) => {
  const { reactions } = post;
  return (
    <>
      <Card className="border-none shadow-none">
        <CardContent className="grid grid-cols-[55px_1fr] gap-x-1 p-0">
          <PostDetail {...post} />
          <div className="col-start-2">
            <PostReactions {...reactions} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
