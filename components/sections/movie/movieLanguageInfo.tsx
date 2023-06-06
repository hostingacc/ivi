import { Stack, Typography, Box } from "@mui/material";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import MyText from "../../content/myText";

interface MovieLanguageInfoProps {
  justifyContent?: string;
}

const MovieLanguageInfo = ({ justifyContent }: MovieLanguageInfoProps) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{ mt: "1rem", justifyContent }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "68px",
          height: "24px",
          padding: "0 0.5rem",
          backgroundColor: "rgba(255,255,255,.16)",
          borderRadius: "8px",
        }}
      >
        <MyText text={"FullHD"} align={"center"} color="#fff" size={"16px"} />
      </Box>
      <Stack direction="row" spacing={1} alignItems="center">
        <VolumeUpIcon sx={{ fontSize: "22px" }} />
        <MyText text={"Рус"} size="16px" color="#fff" />
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <SubtitlesIcon sx={{ fontSize: "22px" }} />
        <MyText text={"Eng"} size="16px" color="#fff" />
      </Stack>
    </Stack>
  );
};

export default MovieLanguageInfo;
