import { Card, CardContent } from "@/components/ui/card";
import type { PostView } from "@/interfaces/post/post-view.interface";
import { cn } from "@/lib/utils";
import { FC } from "react";

import { PostDetail } from "./post-detail";
import { PostReactions } from "./post-reactions";

interface PostProps {
  post: PostView;
  contentType?: "post" | "comment";
}
export const Post: FC<PostProps> = ({ post, contentType = "post" }) => {
  const { reactions } = post;
  return (
    <>
      <Card className="border-none bg-card shadow-none dark:bg-[#181818] max-sm:pr-3">
        <CardContent
          className={cn("grid p-0", {
            "grid-cols-[55px_1fr] gap-x-1": contentType === "post",
            "grid-cols-[55px_1fr] gap-y-1": contentType === "comment",
          })}
        >
          <PostDetail {...post} />
          <div
            className={cn("bg-red-500", {
              "col-start-2": contentType === "post",
              "col-start-1": contentType === "comment",
            })}
          >
            <PostReactions {...reactions} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
