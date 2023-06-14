import MyButton from "../../controls/buttons/myButton";
import { Stack, Box } from "@mui/material";
import SmallButton from "../../controls/buttons/smallButton";
/* import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import IosShareIcon from "@mui/icons-material/IosShare"; */

interface MovieTrailerButtons {
  openModal: () => void;
  showInBox?: boolean;
}

const MovieTrailerButtons = ({ openModal, showInBox = false }) => {
  return (
    <Box
      sx={{
        background: showInBox
          ? "linear-gradient(180deg,rgba(255,255,255,0) 0,rgba(255,255,255,.16) 100%)"
          : "transparent",
        borderBottomRightRadius: showInBox ? "12px" : "unset",
        borderBottomLeftRadius: showInBox ? "12px" : "unset",
        minWidth: showInBox ? "20rem" : "unset",
        height: showInBox ? "3rem" : "unset",
        justifyContent: showInBox ? "space-evenly" : "unset",
      }}
    >
      <Stack
        direction="row"
        gap={1}
        sx={{
          alignItems: showInBox ? "center" : "unset",
          mt: showInBox ? "1rem" : "unset",
          flexWrap: showInBox ? "nowrap" : "wrap",
          flexDirection: showInBox ? "row" : "unset",
          justifyContent: showInBox ? "space-between" : "unset",
          "@media (max-width:1159px)": {
            flexDirection: showInBox ? "row" : "column",
            width: "15.40rem",
            ml: showInBox ? "unset" : "auto",
            mr: showInBox ? "unset" : "auto",
            justifyContent: "space-between",
          },
          "@media (max-width:931px)": {
            width: "15.50rem",
            ml: "auto",
            mr: "auto",
            height: "20px",
          },
        }}
      >
       {/*  <MyButton
          text={"Трейлер"}
          width={"100%"}
          icon={<PlayArrowOutlinedIcon />}
          func={openModal}
          color={showInBox ? "transparent" : "rgba(255,255,255,.08)"}
          hoverColor={"rgba(255,255,255,.18)"}
        />
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flexGrow: "1" }}>
            <SmallButton
              backgroundColor={
                showInBox ? "transparent" : "rgba(255,255,255,.08)"
              }
              hover="rgba(255,255,255,.18)"
              icon={<BookmarkBorderIcon sx={{ color: "#fff" }} />}
              width="100%"
            />
          </Box>
          <Box sx={{ flexGrow: "1" }}>
            <SmallButton
              backgroundColor={
                showInBox ? "transparent" : "rgba(255,255,255,.08)"
              }
              hover="rgba(255,255,255,.18)"
              icon={<NotificationsNoneIcon sx={{ color: "#fff" }} />}
              width="100%"
            />
          </Box>
        </Box> */}
      </Stack>
    </Box>
  );
};

export default MovieTrailerButtons;
