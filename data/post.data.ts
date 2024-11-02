import { PostView } from "@/interfaces/post/post-view.interface";

export const POST_DATA: PostView[] = [
  {
    id: "1",
    urlProfile: "/images/alice-1.webp",
    name: "alice",
    date: "2024/10/31",
    description:
      "9 años emprendiendo @edteamlat con @betoquiroga7 y @alexys_lozada. Esta saga será más larga que rápidos y furiosos. Porque no hay nada más importante que la familia.",
    media: ["/images/post-1.jpg", "/images/post-2.jpg"],
    reactions: { likes: 10, comments: 5, reposts: 2, shares: 3 },
  },
  {
    id: "2",
    urlProfile: "/images/alice-2.webp",
    name: "alice",
    date: "2024/10/31",
    description: "Probando Threads",
    media: ["/images/post-3.jpg"],
    //reactions:{ likes: 10, comments: 5, reposts: 2, shares: 3 },
  },
];
