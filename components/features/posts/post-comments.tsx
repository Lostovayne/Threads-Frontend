import type { PostViewComment } from "@/interfaces/post/post-view.interface";
import { FC } from "react";

import { PostComment } from "./components/post-comment";
import { Post } from "./post";

interface PostCommentsProps {
  comments: PostViewComment[];
}
export const PostComments: FC<PostCommentsProps> = ({ comments }) => {
  return (
    <div className="sm:pl-12">
      {comments.map((comment) => {
        return <PostComment key={comment.commentId} {...comment} />;
      })}
    </div>
  );
};
