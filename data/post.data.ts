import type { PostView, PostViewComment } from "@/interfaces/post/post-view.interface";

export const POST_DATA: PostView[] = [
  {
    id: "1",
    urlProfile: "/images/alice-1.webp",
    name: "romina_sita_misifu_",
    date: new Date('2024-11-04T10:00:00'),
    description:
      "Dakota Johnson with Amber Heard. #Celebrity",
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

export const POST_COMMENTS: PostViewComment[] = [
  {
    commentId: "1",
    id: "1",
    description: "Got to tour Cape Canaveral with one of your propulsion engineers last week with my grandsons. It was AWESOME!",
    date: new Date('2024-11-18T17:00:00'),
    urlProfile: "/images/alice-1.webp",
    name: "romina_sita_misifu_",
    reactions: { likes: 3, comments: 5, reposts: 2, shares: 3 },
    media: ["/images/post-2.jpg", "/images/post-2.jpg"],
  },
  {
    commentId: "2",
    id: "1",
    description: "🇺🇦 | Ucrania | Zelensky amenaza a Rusia después de recibir autorización de Estados Unidos para atacar territorio ruso.\nLos ataques no se llevan a cabo con palabras, no se anuncian esas cosas. Los misiles hablarán por sí solos, seguro que lo harán masivamente .",
    date: new Date('2024-11-04T10:00:00'),
    urlProfile: "/images/alice-1.webp",
    name: "romina_sita_misifu_",
    reactions: { likes: 3, comments: 5, reposts: 2, shares: 3 },
    media: [],
  },
  {
    commentId: "3",
    id: "1",
    description: "Selena Gomez at the Oscars Governors Awards in Los Angeles, California [November 17].",
    date: new Date('2024-11-04T10:00:00'),
    urlProfile: "/images/alice-1.webp",
    name: "romina_sita_misifu_",
    reactions: { likes: 3, comments: 5, reposts: 2, shares: 3 },
    media: [],
  },
  {
    commentId: "4",
    id: "1",
    description: "t estimates that ripping up bike lanes on Yonge Street, Bloor Street and University Avenue would cost Ontario taxpayers $48 million — on top of the $27 million the city spent installing the lanes.",
    date: new Date('2024-11-04T10:00:00'),
    urlProfile: "/images/alice-1.webp",
    name: "romina_sita_misifu_",
    reactions: { likes: 3, comments: 5, reposts: 2, shares: 3 },
    media: ["/images/post-4.jpg", "/images/post-2.jpg"],
  }
]