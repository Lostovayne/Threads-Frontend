import HeaderComponent from "@/components/common/header-mobile";
import { NavDesktop } from "@/components/common/nav/nav-desktop";
import { NavMobile } from "@/components/common/nav/nav-mobile";
import { Post } from "@/components/features/posts/post";
import { Separator } from "@/components/ui/separator";
import { POST_DATA } from "@/data/post.data";

export default function Home() {
  return (
    <div className="relative">
      <HeaderComponent />
      <NavDesktop />
      <NavMobile />

      <section className="border-ColorBorder mx-auto max-w-[650px] border bg-background bg-white shadow-xl dark:border-gray-700 sm:rounded-3xl">
        <PostList />
      </section>
    </div>
  );
}

const PostList = () => {
  return (
    <div className="mt-2 sm:gap-0">
      {POST_DATA.map((post) => (
        <div key={post.id}>
          <div className="px-0 pt-1 sm:px-5 sm:pt-3">
            <Post {...post} />
          </div>
          <Separator className="mt-1 bg-zinc-300/80 dark:bg-gray-700/85" />
        </div>
      ))}
    </div>
  );
};
