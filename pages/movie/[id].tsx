import MovieInfo from "@/components/sections/movie/movieInfo";
import MovieTrailer from "@/components/sections/movie/movieTrailer";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";
import MoviePersons from "@/components/sections/movie/moviePersons";
import MyBreadcrumbs from "@/components/controls/navigation/myBreadcrumbs";
import MovieDevices from "@/components/sections/movie/devices";
import MovieReviews from "@/components/sections/movie/movieReviews";
import MovieModal from "@/components/sections/movie/movieModal";
import ShowMoreText from "@/components/features/showMoreText";
import MovieInfoRating from "@/components/sections/movie/movieInfoRating";
import { initializeStore } from "@/store/ssrStore";
import { rootStore } from "@/store/RootStore";
import TranslationDynamicData from "../../components/content/translationDynamicData";
import MoviesList from "@/components/content/moviesList";
import MovieDetails from "@/components/sections/movie/movieDetails";
import { useWindowSize } from "@/hooks/useWindowSize";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Movie = ({ initialMobxState }: any) => {
  const { movie, similar, comments, persons } = initialMobxState;

  const router = useRouter();
  const id = Array.isArray(router.query.id)
    ? Number(router.query.id[0])
    : Number(router.query.id);

  const size = useWindowSize();

  const topBreadcrumbs = [
    { text: "фильмы", href: "/movies/all" },
    {
      text: movie?.genres[0].nameRu,
      href: `/movies/${movie?.genres[0].nameRu}`,
    },
  ];

  const bottomBreadcrumbs = [
    { text: "мой Иви", href: "/" },
    { text: "фильмы", href: "/movies/all" },
    {
      text: movie?.genres[0].nameRu,
      href: `/movies/${movie?.genres[0].nameRu}`,
    },
    { text: movie?.nameRu, href: "" },
  ];

  return (
    <>
      <MyBreadcrumbs links={topBreadcrumbs} />

      <>
        {movie && (
          <>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                "@media (max-width:1159px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Box
                sx={{
                  mt: "2rem",
                  "@media (min-width:1159px)": {
                    display: "none",
                  },
                }}
              >
                <TranslationDynamicData
                  nameRu={`Фильм ${movie.nameRu} смотреть онлайн`}
                  nameEn={`Movie ${movie.nameEn} watch online`}
                  weight={700}
                  size={"60px"}
                  color={"#fff"}
                  line={"52px"}
                  align={"left"}
                />
              </Box>
              <Stack
                direction="column"
                sx={{
                  mr: "auto",
                  mt: "2rem",
                  position: "relative",
                  "@media (min-width:1159px)": {
                    display: "none",
                  },
                }}
              >
                <MovieDetails
                  year={movie.year}
                  movieLength={movie.filmLength}
                  ratingAgeLimits={movie.ratingAgeLimits}
                  genres={movie.genres}
                  countries={movie.countries}
                  justifyContent="flex-start"
                />
              </Stack>

              <MovieTrailer
                video={MovieTrailer}
                rating={movie.ratingKinopoisk}
                persons={persons}
              />

              <Box
                sx={{
                  ml: "auto",
                  "@media (max-width:1159px)": {
                    display: "none",
                  },
                }}
              >
                <MovieInfo
                  nameRu={movie.nameRu}
                  nameEn={movie.nameEn}
                  year={movie.year}
                  movieLength={movie.filmLength}
                  ratingAgeLimits={movie.ratingAgeLimits}
                  genres={movie.genres}
                  countries={movie.countries}
                  type={movie.type}
                  description={movie.description}
                  rating={movie.ratingKinopoisk}
                  ratingVoteCount={movie.ratingKinopoiskVoteCount}
                  persons={persons}
                />
              </Box>
              <Box
                sx={{
                  mb: "4rem",
                  "@media (min-width:1159px)": {
                    display: "none",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "42rem",
                    "@media (max-width:879px)": {
                      width: "unset",
                    },
                  }}
                >
                  <ShowMoreText
                    text={movie.description}
                    color="rgba(255,255,255,.78)"
                    length={350}
                    buttonText={"Детали о фильме"}
                    showCollapseButton={true}
                  />
                  <MovieInfoRating
                    rating={movie.ratingKinopoisk}
                    voteCount={movie.ratingKinopoiskVoteCount}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: "2rem" }}>
              <TranslationDynamicData
                nameRu={`С фильмом «${movie.nameRu}» смотрят`}
                nameEn={`With the film «${movie.nameEn}» watch`}
                color={"#fff"}
                weight={700}
                line={"28px"}
                align={"left"}
                size={"24px"}
              />
              <MoviesList movies={similar} />
            </Box>
            <MoviePersons
              persons={persons}
              nameRu={movie.nameRu}
              nameEn={movie.nameEn}
              year={movie.year}
              countries={movie.countries}
              comments={comments}
              id={movie.id}
              width={size.width}
            />
            <MovieReviews comments={comments} />
            <MovieDevices
              nameRu={movie.nameRu}
              nameEn={movie.nameEn}
              poster={movie.posterUrlPreview}
            />
          </>
        )}
      </>
      <MovieModal persons={persons} comments={comments} movieId={id || 0} />
      <Box sx={{ mb: "2rem" }}>
        <MyBreadcrumbs links={bottomBreadcrumbs} />
      </Box>
    </>
  );
};

export async function getServerSideProps({ query, res, locale }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const { id } = query;
  const url = id ? `${baseUrl}:3001/movies/` + id : undefined;
  const similarUrl = id ? url + "/similar" : undefined;
  const commentsUrl = id
    ? `${baseUrl}:3004/comments/` + id + "/flat"
    : undefined;
  const personsUrl = id ? `${baseUrl}:3005/persons/` + id : undefined;

  const [movie, similar, comments, persons] = await Promise.all([
    url ? fetch(url).then((res) => res.json()) : Promise.resolve(undefined),
    similarUrl
      ? fetch(similarUrl).then((res) => res.json())
      : Promise.resolve(undefined),
    commentsUrl
      ? fetch(commentsUrl).then((res) => res.json())
      : Promise.resolve(undefined),
    personsUrl
      ? fetch(personsUrl).then((res) => res.json())
      : Promise.resolve(undefined),
  ]);

  const initialData = {
    movie: movie,
    similar: similar,
    comments: comments,
    persons: persons,
  };

  const store = initializeStore(initialData, rootStore);

  const initialMobxState = {
    movie: store.movie,
    similar: store.similar,
    comments: store.comments,
    persons: store.persons,
  };

  return {
    props: {
      initialMobxState,
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
}

export default Movie;
