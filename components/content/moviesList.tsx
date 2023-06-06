import React from "react";
import { Box } from "@mui/material";
import Movie from "./movie";
import MyLink from "../controls/navigation/myLink";
import { observer } from "mobx-react-lite";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useWindowSize } from "../../hooks/useWindowSize";
import MySwiper from "../features/mySwiper";

interface MoviesListProps {
  url?: any;
  movies: Movie[];
  title?: string;
  swiperButtonId?: string;
}

const MoviesList = observer(
  ({ url, movies, title, swiperButtonId }: MoviesListProps) => {
    const size = useWindowSize();

    let slidesPerView = 7;

    if (size.width) {
      if (size.width <= 329) {
        slidesPerView = 2;
      } else if (size.width <= 507) {
        slidesPerView = 2;
      } /* else if (size.width <= 599) {
          slidesPerView = 4;
        } */ else if (size.width <= 695) {
        slidesPerView = 3;
      } else if (size.width <= 920) {
        slidesPerView = 4;
      } else if (size.width <= 1088) {
        slidesPerView = 5;
      } else if (size.width <= 1272) {
        slidesPerView = 6;
      }
    }

    return (
      <Box sx={{ mt: "1rem", mb: "2rem" }}>
        {title && (
          <MyLink
            link={`/movies/${title}`}
            content={title}
            fontSize="24px"
            fontWeight={700}
            color="#fff"
          />
        )}

        {movies?.length < slidesPerView || url ? (
          <Box
            sx={{
              display: "flex",
              justifyContent:
                movies?.length < slidesPerView ? "flex-start" : "space-between",
              flexWrap: "wrap",
            }}
          >
            {movies?.map((movie, index) => (
              <Box
                key={movie.id}
                sx={{
                  ml:
                    index !== 0 && movies?.length < slidesPerView ? "1rem" : 0,
                }}
              >
                <Movie movie={movie} />
              </Box>
            ))}
          </Box>
        ) : (
          <MySwiper
            spaceBetween={10}
            slidesPerView={slidesPerView}
            nextEl={`swiper-button-next${swiperButtonId}`}
            prevEl={`swiper-button-prev${swiperButtonId}`}
            isCustomButtons={true}
          >
            {movies?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Movie movie={movie} />
              </SwiperSlide>
            ))}
          </MySwiper>
        )}
      </Box>
    );
  }
);

export default MoviesList;
