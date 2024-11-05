import HeaderComponent from "@/components/common/header-mobile";
import { Post } from "@/components/features/posts/post";
import { Separator } from "@/components/ui/separator";
import { POST_DATA } from "@/data/post.data";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <section className="mx-auto mt-10 max-w-[650px] rounded-1xl sm:rounded-3xl border  border-300/70 dark:border-gray-700 bg-background shadow-xl max-md:pr-3">
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
          <div className="px-0 pt-1 sm:pt-3 sm:px-5">
            <Post {...post} />
          </div>
          <Separator className="mt-1 bg-zinc-500/80 dark:bg-gray-700/85" />
        </div>
      ))}
    </div>
  );
};
