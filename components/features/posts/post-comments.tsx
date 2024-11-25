import type { PostViewComment } from "@/interfaces/post/post-view.interface";
import { FC } from "react";

import { PostComment } from "./components/post-comment";
import { Post } from "./post";
import { Separator } from "@/components/ui/separator";

interface PostCommentsProps {
  comments: PostViewComment[];
}
export const PostComments: FC<PostCommentsProps> = ({ comments }) => {
  return (
    <div className="sm:pl-12">
      {comments.map((comment) => {
        return (
       <>
          <PostComment key={comment.commentId} {...comment} />
          <Separator className="mt-1 bg-foreground/50" />
       </>
      )
      })}
    </div>
  );
};
