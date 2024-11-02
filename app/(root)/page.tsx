import { PostMain } from "@/components/features/posts/post-main";
import { POST_DATA } from "@/data/post.data";

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <PostList />
    </>
  );
}

const PostList = () => {
  return (
    <div className="flex flex-col mt-2 gap-4 sm:gap-0 px-1">
      {
        POST_DATA.map((post) => (
          <PostMain
            key={post.id}
            id={post.id}
            urlProfile={post.urlProfile}
            name={post.name}
            date={post.date}
            description={post.description}
            media={post.media}
            reactions={post.reactions}
          />
        ))
      }
    </div>
  )
}