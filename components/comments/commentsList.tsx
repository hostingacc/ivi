import { Box, Container} from '@mui/material';
import Comment from './comment'
import Slider from '../features/slider';

const CommentsList = ({filmId ,comments, showChildComments = true, setModalIsOpen}:any) => {
  const topLevelComments = comments?.filter((c:any) => c.repliedOnComment === null);

 const SliderContent = topLevelComments?.map((comment: any) => (
    <Comment
      key={comment.id}
      comment={comment}
      allComments={comments}
      showChildComments={false}
      setModalIsOpen={setModalIsOpen}
    />
  ));
 

    return (
        <Box>

          <Box sx={{
            display: showChildComments ? 'block' : 'flex',
            flexDirection: 'row',
            gap: showChildComments ? 0 : '2rem',
            
            }}>

            {!showChildComments ? (
           
                                                                            /* А может сделать 100%, там же есть контейнер, а увеличивать слайд и делать 200 */
                <Slider itemsCount={SliderContent?.length} itemsToShow={4} content={SliderContent} containerWidth={75.99875} itemWidth={17.8} />
       
            ) : (
              topLevelComments?.map((comment: any) => (
                <Comment
                  filmId={filmId}
                  key={comment.id}
                  comment={comment}
                  allComments={comments}
                  showChildComments={true}
                  setModalIsOpen={setModalIsOpen}
                />
              ))
            )}
          {/* ПОПРАВИТЬ, УБРАТЬ ПОВТОРЕНИЕ*/}
          </Box>

        </Box>
    );
}

export default CommentsList;

