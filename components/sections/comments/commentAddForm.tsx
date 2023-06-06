import { Box, Button, TextField, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyButton from "../../controls/buttons/myButton";
import useRequest from "../../../hooks/useRequest";
import { useRouter } from "next/router";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
  },
});

interface CommentAddFormProps {
  id?: number;
  movieId: number;
}

const CommentAddForm = ({ id, movieId }: CommentAddFormProps) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const router = useRouter();

  const [commentsData, setCommentsData] = useState({
    type: "POSITIVE",
    title: "test",
    description: "",
    repliedOnComment: id,
  });

  const commentClassToggle = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsCommentOpen((prev) => !prev);
  };

  const [isClicked, setIsClicked] = useState(false);

  const data = useRequest(
    isClicked ? `${baseUrl}:3004/comments/${movieId}` : undefined,
    "POST",
    commentsData
  );

  const sendComment = () => {
    setIsClicked(true);
    router.replace(router.asPath);
  };
  useEffect(() => {
    setIsClicked(false);
  }, [data]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mb: "1rem" }}>
      <MyButton
        text={id ? "Ответить" : "оставить комментарий"}
        color="#1f1b2e"
        hoverColor="#3e3659"
        func={commentClassToggle}
      />
      {isCommentOpen && (
        <ThemeProvider theme={theme}>
          <FormControl>
            <TextField
              sx={{ mt: "0.2rem" }}
              id="outlined-basic"
              variant="outlined"
              placeholder="введите комментарий"
              onChange={(e) =>
                setCommentsData({
                  ...commentsData,
                  description: e.target.value,
                })
              }
            />

            <Box>
              <Button onClick={sendComment}>Опубликовать</Button>
              <Button onClick={commentClassToggle}>Отменить</Button>
            </Box>
          </FormControl>
        </ThemeProvider>
      )}
    </Box>
  );
};

export default CommentAddForm;
