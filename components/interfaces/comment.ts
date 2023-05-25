export interface CommentI {
    movieId: number;
    id: number;
    repliedOnComment: number | null;
    description: string;
    createdAt: string;
    author: string;
    comment:CommentI[];
}
