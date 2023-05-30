import { getTopLevelcomments } from "./getTopLevelComments";
import { CommentI } from "@/components/interfaces/comment";


export const countComments = (comments: CommentI[]):number => {
    const topLevelComments = getTopLevelcomments(comments);

    return comments?.reduce((count, comment) => {
        const childComments = topLevelComments.filter(
            (c:CommentI) => c.repliedOnComment === comment.id
        );
        return count + countComments(childComments);
    }, comments.length);
}