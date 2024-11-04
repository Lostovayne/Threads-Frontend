export interface PostView {
  id: string;
  urlProfile: string;
  name: string;
  date: string;
  description: string;
  media: string[];
  reactions: PostViewReactions;
}

export interface PostViewReactions {
  likes: number;
  comments: number;
  reposts: number;
  shares: number;
}
