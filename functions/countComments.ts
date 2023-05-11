import { getTopLevelcomments } from "./getTopLevelComments";


export const countComments = (comments: any[]):any => {
    const topLevelComments = getTopLevelcomments(comments);

    return comments?.reduce((count, comment) => {
        const childComments = topLevelComments.filter(
            (c: any) => c.repliedOnComment === comment.id
        );
        return count + countComments(childComments);
    }, comments.length);
}