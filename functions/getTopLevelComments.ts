import { CommentI } from "@/interfaces/comment";

export const getTopLevelcomments = (comments: CommentI[]) => {
  return comments?.filter((c) => c.repliedOnComment === null);
};
