import { Box } from "@mui/material";
import MyText from "./myText";

interface TimeProps {
  time: string;
}

const Time = ({ time }: TimeProps) => {
  const date = new Date(time);
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  let currentDay;
  let showTime = true;
  if (date.getFullYear() < now.getFullYear() - 1) {
    currentDay = "больше года назад";
    showTime = false;
  } else if (date.toDateString() === now.toDateString()) {
    currentDay = "сегодня";
  } else if (date.toDateString() === yesterday.toDateString()) {
    currentDay = "вчера";
  } else {
    currentDay = date.toLocaleString("ru", { day: "numeric", month: "long" });
  }

  const currentTime = date.toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  //STORYBOOK
  return (
    <Box sx={{ display: "flex", gap: 0.5 }}>
      <MyText align="left" text={currentDay} />
      {showTime && (
        <>
          <MyText align="left" text={"в"} />
          <MyText align="left" text={currentTime} />
        </>
      )}
    </Box>
  );
};

export default Time;