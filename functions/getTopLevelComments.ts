export const getTopLevelcomments = (comments:any) => {
    return comments?.filter((c:any) => c.repliedOnComment === null);
}