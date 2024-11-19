import { Card, CardContent } from "@/components/ui/card";
import type { PostView } from "@/interfaces/post/post-view.interface";
import { cn } from "@/lib/utils";
import { FC } from "react";

import { PostDetailContent } from "./components/post-detail-content";
import { PostDetail } from "./post-detail";
import { PostReactions } from "./post-reactions";

interface PostProps {
  post: PostView;
  contentType?: "post" | "post-page" | "post-comment";
}
export const Post: FC<PostProps> = ({ post, contentType = "post" }) => {
  const { reactions } = post;
  return (
    <>
      <Card className="border-none bg-card shadow-none dark:bg-[#181818] max-sm:pr-3">
        <CardContent
          className={cn("grid p-0", {
            "grid-cols-[55px_1fr] gap-x-1": contentType === "post",
            "grid-cols-[55px_1fr] gap-y-1": contentType === "post-page" || contentType === "post-comment",
          })}
        >
          <PostDetail {...post} />
          <div
            className={cn(" col-span-2", {
              "col-start-2": contentType === "post" || contentType === "post-comment",
              "col-start-1 px-2": contentType === "post-page",
            })}
          >
            <PostDetailContent
              description={post.description}
              media={post.media}
            />
          </div>
          <div
            className={cn("", {
              "col-start-2": contentType === "post" || contentType === "post-comment",
              "col-start-2 pl-2": contentType === "post-page",
            })}
          >
            <PostReactions {...reactions} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};
