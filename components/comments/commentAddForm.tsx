import { Box, Button, TextField, FormControl } from '@mui/material';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MyButton from '../buttons/myButton';

const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#fff',
      },
    },
  });

const CommentAddForm = () => {
    const [isCommentOpen, setIsCommentOpen] = useState(false);

    const commentClassToggle = (e:any) => {

        e.preventDefault();
        setIsCommentOpen((prev) => !prev);
      };



    

    return (
        <Box sx={{display:'flex', flexDirection:'column', mb:'1rem'}}>
            <MyButton text={'Ответить'} color='#1f1b2e' hoverColor='#3e3659' func={commentClassToggle}/>
          {isCommentOpen && (
            <ThemeProvider theme={theme}>
                <FormControl>
                    <TextField sx={{mt:'0.2rem'}}
                        id="outlined-basic" variant="outlined" placeholder='введите комментарий'
                        /* label="text"  убрал, потому что по какой-то причине флоат не работает */
                    />

                    <Box>
                        <Button>Опубликовать</Button>
                        <Button onClick={commentClassToggle}>
                            Отменить
                        </Button>
                    </Box>
                </FormControl>
            </ThemeProvider>
          )}
        </Box>
      );
}

export default CommentAddForm;