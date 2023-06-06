import { Box } from "@mui/material";
import MyText from "../../content/myText";
import MyButton from "../../controls/buttons/myButton";
import Medallion from "./medallion";

interface MovieInfoRatingProps {
  rating: number;
  voteCount: number;
}

const MovieInfoRating = ({ rating, voteCount }: MovieInfoRatingProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "5.2rem",
        backgroundColor: "rgba(255,255,255,.08)",
        alignItems: "center",
        padding: "0.4rem",
        mt: "1rem",
        borderRadius: "12px",
        "@media (max-width:931px)": {
          height: "10rem",
        },
      }}
    >
      <Box sx={{ flexGrow: 4, height: "100%" }}>
        <Medallion
          transparentBorder={true}
          rating={rating}
          fontSize={"1.4rem"}
          fontWeight={700}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 12,
          ml: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <MyText
          text={"Рейтинг иви"}
          color="#fff"
          align="left"
          weight={500}
          size="16px"
        />
        <MyText
          text={"Интересный сюжет"}
          color="rgba(255,255,255,.72)"
          align="left"
          weight={400}
          size="16px"
        />
        <MyText
          text={`${voteCount} оценок`}
          color="rgba(255,255,255,.72)"
          align="left"
          size={"16px"}
          weight={400}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <MyButton
          color={"transparent"}
          text={"Оценить"}
          width="8.4rem"
          height="2rem"
          border="1px solid rgba(255,255,255,0.33) !important"
        />
      </Box>
    </Box>
  );
};

export default MovieInfoRating;
