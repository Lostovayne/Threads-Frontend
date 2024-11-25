"use server"

import { POST_COMMENTS, POST_DATA } from "@/data/post.data";
import { PostViewWithComments } from "@/interfaces/post/post-view.interface";
import { comment } from "postcss";

export const getPost = async (id:string):Promise<{success: boolean, data: PostViewWithComments | null}> => {
    const posts = POST_DATA.filter((post) => post.id === id);
    const comments = POST_COMMENTS.filter((comment) => comment.id === id);
    const resp = {
        success: posts.length? true: false,
        data: !posts.length? null : {
            post: posts[0],
            comments: comments
        },
    }
    return resp;
};