export interface PostView {
  id: string;
  urlProfile: string;
  name: string;
  date: Date;
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

export interface PostViewComment extends PostView {
  commentId: string;
}

export interface PostViewWithComments {
  post: PostView;
  comments: PostViewComment[];
} 