import { PostView } from "@/interfaces/post/post-view.interface";

export const POST_DATA: PostView[] = [
  {
    id: "1",
    urlProfile: "/images/alice-1.webp",
    name: "romina_sita_misifu_",
    date: "20 horas",
    description:
      "Creo que esto es lo más personal que daré a conocer.... Y solo diré que la infertilidad es muy dura 🥺 pensé que si sucedería este mes, pero no ....me rompe el alma ",
    media: ["/images/post-1.jpg", "/images/post-2.jpg"],
    reactions: { likes: 10, comments: 5, reposts: 2, shares: 3 },
  },
  {
    id: "2",
    urlProfile: "/images/alice-2.webp",
    name: "alice",
    date: "10 horas",
    description: "Probando Threads",
    media: ["/images/post-3.jpg"],
    reactions:{ likes: 1, comments: 5, reposts: 0, shares: 1 },
  },
  {
    id: "3",
    urlProfile: "/images/alice-1.webp",
    name: "alice2",
    date: "1 día",
    description: "#encuesta Prefieres:\n—Películas.\n—Series.",
    media: ["/images/post-2.jpg"],
    reactions:{ likes: 1, comments: 2, reposts: 3, shares: 4 },
  },
];
