import { PostView } from "@/interfaces/post/post-view.interface";
import { Post } from "@/interfaces/post/post.interface";

export class PostMapper {
    static toPostView(post: Post): PostView {
        return {
            urlProfile: post.urlProfile,
            name: post.name,
            date: post.date,
            description: post.description,
            media: post.media,
            reactions: post.reactions
        }
    }
}