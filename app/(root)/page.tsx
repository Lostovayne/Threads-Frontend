import HeaderComponent from "@/components/common/header-mobile";
import { Post } from "@/components/features/posts/post";
import { Separator } from "@/components/ui/separator";
import { POST_DATA } from "@/data/post.data";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <section className="mx-auto mt-10 max-w-[600px] rounded-3xl border border-zinc-300/70 shadow-xl max-md:pr-3">
        <PostList />
      </section>
    </>
  );
}

const PostList = () => {
  return (
    <div className="mt-2 sm:gap-0">
      {POST_DATA.map((post) => (
        <div key={post.id}>
          <div className="px-5 pt-5">
            <Post {...post} />
          </div>
          <Separator className="mt-1 bg-zinc-300/80" />
        </div>
      ))}
    </div>
  );
};
