import { getPost } from "@/actions/sample-data/get-post.action";
import { AuthRegistrationModal } from "@/components/features/auth/auth-registration-modal";
import { Post } from "@/components/features/posts/post";
import { PostComments } from "@/components/features/posts/post-comments";
import type { PostViewWithComments } from "@/interfaces/post/post-view.interface";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  const resp = await getPost(id);

  console.log(resp);
  if (!resp.success) {
    return <div className="text-background">Post not found</div>;
  }

  const post = resp.data as PostViewWithComments;

  return (
    <div>
      <Post post={post.post} contentType="post-page" />
      <AuthRegistrationModal />
      <PostComments comments={post.comments} />
    </div>
  );
}
