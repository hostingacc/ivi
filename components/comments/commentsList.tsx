import { Box } from '@mui/material';
import Comment from './comment'
import { CommentI } from '../interfaces/comment';
import { useWindowSize } from '@/hooks/useWindowSize';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


interface CommentsListProps {
  movieId?: number;
  comments: CommentI[];
  showChildComments?: boolean;
}

const CommentsList = ({movieId = 0 ,comments, showChildComments = true}:CommentsListProps) => {
  const topLevelComments = comments?.filter((c) => c.repliedOnComment === null);


  const size = useWindowSize();

  let slidesPerView = 4;

    if (size.width) {
      
         if (size.width <= 512) {
          slidesPerView = 1;
        } else if (size.width <= 880) {
          slidesPerView = 2;
        } else if (size.width <= 1159) {
          slidesPerView = 3;
        }
      }

    return (
        <Box>

          <Box sx={{
            display: showChildComments ? 'block' : 'flex',
            width:'100%',
            flexDirection: 'row',
            gap: showChildComments ? 0 : '1rem',    
          }}>
            {!showChildComments ? (
                  <Swiper                 
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={slidesPerView}
                    navigation={{
                      nextEl: `.swiper-button-next`,
                      prevEl: `.swiper-button-prev`,
                  }}          
                  >
                       {topLevelComments?.map((comment) => (
                        <SwiperSlide key={comment.id}>
                        <Comment
                          key={comment.id}
                          comment={comment}
                          allComments={comments}
                          showChildComments={false} 
                          movieId={comment.movieId}     
                        />
                        </SwiperSlide>
                      ))}
                  </Swiper>

            ) : (
              topLevelComments?.map((comment) => (
                <Comment
                  movieId={movieId}
                  key={comment.id}
                  comment={comment}
                  allComments={comments}
                  showChildComments={true}
                />
              ))
            )}
          </Box>

        </Box>
    );
}

export default CommentsList;

