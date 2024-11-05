import { PostView } from "@/interfaces/post/post-view.interface";

export const POST_DATA: PostView[] = [
  {
    id: "1",
    urlProfile: "/images/alice-1.webp",
    name: "romina_sita_misifu_",
    date: new Date('2024-11-04T10:00:00'),
    description:
      "Creo que esto es lo más personal que daré a conocer.... Y solo diré que la infertilidad es muy dura 🥺 pensé que si sucedería este mes, pero no ....me rompe el alma ",
    media: ["/images/post-1.jpg", "/images/post-2.jpg"],
    reactions: { likes: 10, comments: 5, reposts: 2, shares: 3 },
  },
  {
    id: "2",
    urlProfile: "/images/alice-2.webp",
    name: "2000sanxiety",
    date: new Date('2024-11-04T20:18:00'),
    description: "Anne Hathaway, Emily Blunt and Gisele Bündchen BTS of The Devil Wears Prada (2006)",
    media: ["/images/post-4.jpg"],
    reactions:{ likes: 2500, comments: 14, reposts: 73, shares: 1 },
  },
  {
    id: "3",
    urlProfile: "/images/alice-1.webp",
    name: "alice2",
    date: new Date('2024-11-03T10:00:00'),
    description: "#encuesta Prefieres:\n—Películas.\n—Series.",
    media: ["/images/post-2.jpg"],
    reactions:{ likes: 1, comments: 2, reposts: 3, shares: 4 },
  },
  {
    id: "4",
    urlProfile: "/images/alice-2.webp",
    name: "alice3",
    date: new Date('2024-10-03T10:00:00'),
    description: "#codeando Prueba formato fecha",
    media: ["/images/post-3.jpg"],
    reactions:{ likes: 7000, comments: 4200100, reposts: 3, shares: 4 },
  },
];
