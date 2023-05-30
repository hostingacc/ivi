import { CommentI } from "@/components/interfaces/comment";

export const getTopLevelcomments = (comments: CommentI[]) => {
  return comments?.filter((c) => c.repliedOnComment === null);
};