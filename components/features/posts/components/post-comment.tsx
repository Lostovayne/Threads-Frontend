import { Card, CardContent } from "@/components/ui/card";
import { PostViewComment } from "@/interfaces/post/post-view.interface";
import { FC } from "react";

import { Post } from "../post";
import { PostDetail } from "../post-detail";
import { PostReactions } from "../post-reactions";

export const PostComment: FC<PostViewComment> = (comment) => {
  const { commentId, ...post } = comment;

  return (
    // <div>
    //   <Card className="border-none bg-card shadow-none dark:bg-[#181818] max-sm:pr-3">
    //     <CardContent className="grid grid-cols-[55px_1fr] gap-x-1 p-0">
    //       <PostDetail {...post} />
    //       <div className="col-start-2">
    //         <PostReactions {...post.reactions} />
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
    <Post post={post} contentType="comment" />
  );
};
