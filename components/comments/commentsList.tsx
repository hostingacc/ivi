import { Box } from '@mui/material';
import Comment from './comment'

import data from '../../public/temporaryFiles/data.json';

const CommentsList = ({comments, showChildComments, setModalIsOpen}:any) => {
  const topLevelComments = data.comments.filter((c:any) => c.repliedOnComment === null);



    return (
        <Box>
          <Box sx={{
            display: showChildComments ? 'block' : 'flex',
            flexDirection: 'row',
            gap: showChildComments ? 0 : '2rem',
            
            }}>
            {topLevelComments.map((comment:any) => (
              <Comment key={comment.id} comment={comment} allComments={data.comments} showChildComments={showChildComments} setModalIsOpen={setModalIsOpen}/>
            ))}
          </Box>
        </Box>
    );
}

export default CommentsList;