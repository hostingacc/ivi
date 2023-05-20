import { Box } from "@mui/material";
import MyText from "./myText";

interface TimeProps {
  time: string;
}

const Time = ({ time }: TimeProps) => {

  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const date = new Date(time);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <Box sx={{ display: "flex", gap: 0.5 }}>
      <MyText align="left" text={`${day} ${month} ${year}`} />
    </Box>
  );
};

export default Time;