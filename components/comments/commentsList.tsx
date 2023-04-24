import { Box } from '@mui/material';

import CommentAddForm from './commentAddForm';
import CommentInfo from './commentInfo';
import MyText from '../content/myText';
import ShowMoreText from '../showMoreText';

const CommentsList = ({comments}:any) => {


    return (
        <Box>
          <Box gap={10} sx={{backgroundColor:'#1f1b2e', mt:'1rem', mb:'1rem', height:'4rem',display:'flex', alignItems:'center'}}>
            <MyText text='Комментарии(здесь количество)' align='left' color='#fff'/>

            <MyText text='Здесь будет кнопка, подумать как переиспользовать компонент FormAdd' align='right' color='#fff'/>
            {/* подумать, как переиспользовать CommentAddForm здесь */}
          </Box>
          {comments?.map((e:any) => {
            return (
              <Box key={e.id} >
                <Box >
                    <CommentInfo
                        name={e.author}
                        time={e.createdAt}
                        id={e.id}
                    />
                </Box>
                <Box sx={{mt:'1rem', mb:'1rem'}}>
                  <ShowMoreText text={e.description} length={400} buttonText={'показать полностью'} useDangerouslySetInnerHTML={true}/>
                </Box>


                <CommentAddForm/>
                {e.replies.map((el:any) => {
                  return (
                    <Box key={el.comment_id} sx={{ml:'2rem'}}>
                      <Box>
                        <CommentInfo
                            name={el.name}
                            time={el.timestamp}
                            id={el.comment_id}
                        />
                      </Box>
                      <Box sx={{mt:'1rem', mb:'1rem'}}>
                        <MyText text={el.text} align={'left'} color='rgba(255,255,255,.48)'/>
                      </Box>
                      <CommentAddForm />
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </Box>
      );
}

export default CommentsList;