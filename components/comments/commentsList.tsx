import { Box } from '@mui/material';
import data from '../../public/temporaryFiles/data.json';


import CommentAddForm from './commentAddForm';
import CommentInfo from './commentInfo';
import MyText from '../content/myText';

const CommentsList = () => {

    return (
        <Box>
          <Box gap={10} sx={{backgroundColor:'#1f1b2e', mt:'1rem', mb:'1rem', height:'4rem',display:'flex', alignItems:'center'}}>
            <MyText text='Комментарии(здесь количество)' align='left' color='#fff'/>

            <MyText text='Здесь будет кнопка, подумать как переиспользовать компонент FormAdd' align='right' color='#fff'/>
            {/* подумать, как переиспользовать CommentAddForm здесь */}
          </Box>
          {data.comments.map((e) => {
            return (
              <Box key={e.comment_id} >
                <Box >
                    <CommentInfo
                        name={e.name}
                        time={e.timestamp}
                        id={e.comment_id}
                    />
                </Box>
                <Box sx={{mt:'1rem', mb:'1rem'}}>
                    <MyText text={e.text} align={'left'} color='#fff'/>
                </Box>


                <CommentAddForm/>
                {e.replies.map((el) => {
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
                        <MyText text={el.text} align={'left'} color='#fff'/>
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