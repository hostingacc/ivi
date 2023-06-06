import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormattedRating from "./formattedRating";
import { Box, Stack, LinearProgress } from "@mui/material";

import styles from "../../styles/movie.module.css";

import {
  BookmarkBorderOutlined,
  AutoFixHighOutlined,
  StarBorderPurple500Outlined,
  DoNotDisturbAltOutlined,
} from "@mui/icons-material";
import MyTooltip from "./MyTooltip";
import TranslationDynamicData from "./translationDynamicData";
import MyText from "./myText";
import GenresAndCountriesList from "../sections/movie/GenresAndCountriesList";

const Movie = ({ movie }) => {
  const [progress, setProgress] = useState([70, 60, 80, 90]);

  return (
    <Box key={movie.id} className={styles.movie} sx={{ width: "100%" }}>
      <Link
        href={{
          pathname: `/movie/${movie.id}`,
          query: {
            id: movie.id,
          },
        }}
      >
        <Box
          className={styles.hoverImage}
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
        >
          <Image
            src={movie.posterUrlPreview}
            alt="постер фильма"
            fill
            /*     sizes="(max-width: 600px) 100vw, 50vw" */
          />
          <Box
            className={styles.hoverContent}
            sx={{
              width: "100%",
              height: "100%",
              padding: "1rem",
              display: "flex",
            }}
          >
            <Box sx={{ mt: "auto", mb: "1rem" }}>
              <Stack direction="row" alignItems="center">
                <FormattedRating
                  rating={movie.ratingKinopoisk}
                  smallDecimal={true}
                  color="#fff"
                />
                <Box sx={{ width: "1.5rem" }}>
                  {progress.map((value, i) => (
                    <LinearProgress
                      key={i}
                      variant="determinate"
                      value={value}
                      sx={{
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "red",
                        },
                        backgroundColor: "grey",
                        marginLeft: "0.3rem",
                        marginBottom: "0.2rem",
                        height: "0.2rem",
                      }}
                    />
                  ))}
                </Box>
              </Stack>
              <MyText
                text={"сюжет"}
                color="rgba(255,255,255,0.85)"
                size={"16px"}
              />
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                sx={{ mt: "0" }}
              >
                <MyText
                  text={`${movie.year},`}
                  color="rgba(255,255,255,0.85)"
                  size="16px"
                />
                <GenresAndCountriesList
                  showOnlyFirst={true}
                  genres={movie.genres}
                  countries={movie.countries}
                />
              </Stack>
            </Box>

            <Stack
              spacing={1}
              sx={{ right: "16px", top: "1rem", position: "absolute" }}
            >
              <MyTooltip
                content={<BookmarkBorderOutlined />}
                text={"Смотреть позже"}
              />
              <MyTooltip content={<AutoFixHighOutlined />} text={"Похожее"} />
              <MyTooltip
                content={<StarBorderPurple500Outlined />}
                text={"Уже смотрел, оценить"}
              />
              <MyTooltip
                content={<DoNotDisturbAltOutlined />}
                text={"Не нравится такое"}
              />
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: "0.4rem" }}>
          <TranslationDynamicData
            nameRu={movie.nameRu}
            nameEn={movie.nameEn}
            weight={700}
            color="#fff"
            align="left"
            shouldCut={true}
          />
        </Box>
      </Link>
    </Box>
  );
};

export default Movie;
