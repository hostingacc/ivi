import MoviesList from "@/components/content/moviesList";
import { Box, Stack } from "@mui/material";
import FiltersList from "@/components/sections/movies/filtersList";
import { observer } from "mobx-react-lite";
import { initializeStore, useStore } from "@/store/ssrStore";
import { rootStore } from "@/store/RootStore";
import { useRouter } from "next/router";
import SortIcon from "@mui/icons-material/Sort";
import DropDownItem from "@/components/sections/movies/dropDownItem";
import MyButton from "@/components/controls/buttons/myButton";
import MyBreadcrumbs from "@/components/controls/navigation/myBreadcrumbs";
import MyTitle from "@/components/content/myTitle";
import ShowMoreText from "@/components/features/showMoreText";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ClearIcon from "@mui/icons-material/Clear";

const Movies = observer(({ initialMobxState }: any) => {
  const store = useStore(initialMobxState, rootStore);

  const router = useRouter();
  const urlQueries = router.query;

  const text =
    '<p class="paragraph">Вы любите смотреть фильмы онлайн и проводите много времени,прочесывая сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi – фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно пополняется как новыми фильмами, так и признанными шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных боевиков или поклонница молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех других способах проведения досуга, и вы будете пересматривать любимые фильмы онлайн снова и снова!</p> <p class="paragraph">Выбор фильмов очень широк и многообразен, так что каждый найдет для себя что-то интересное, каким бы ни были его вкусы. Предпочитаете картины исключительно зарубежного производства? У нас их предостаточно: это и золотая классика Голливуда, и душевные французские комедии, и темпераментные итальянские драмы, и шумные индийские музыкальные фильмы. А может, вы патриот и любите российские фильмы? Что ж, и таких фильмов у нас немало. Что вам больше по вкусу – добрая старая классика или новинки кинопроката? Неважно, каким будет ваш ответ – у нас есть все, как картины эпохи зарождения кинематографа, так 2016 года и фильмы 2015.</p> <p class="paragraph">В нашем каталоге вы найдете любые жанры. Это и фильмы про любовь, и детективы, и боевики, и вестерны, и фантастика, и арт-хаус, и уморительные комедии, и фильмы про войну, и ужасы, и триллеры, и документалистика… Кроме «полного метра» на сайте представлены также короткометражные фильмы, а также иностранные и русские сериалы.</p> <p class="paragraph">Если вас интересуют самые знаковые фильмы онлайн в том или ином жанре, система рубрикации поможет вам без труда сориентироваться и найти, например, лучшие драмы или лучший анимационный фильм онлайн.</p> <p class="paragraph">Не упустите замечательную возможность смотреть фильмы онлайн, выбирая только то, что вам действительно интересно, и тогда, когда вам это удобно. Ведь это так просто и приятно!</p>';

  const handlePagination = (e) => {
    rootStore.moviesStore.pagination();
  };

  const genreBreadcrumbs = rootStore.ssrStore.selectedFilters.genres.map(
    (genre) => ({
      text: genre.name,
      href: ``,
    })
  );

  const breadcrumbs = [
    { text: "мой Иви", href: "/" },
    { text: "фильмы", href: "/movies/all" },
    ...genreBreadcrumbs,
  ];

  return (
    <Box sx={{ mb: "20rem" }}>
      <MyBreadcrumbs links={breadcrumbs} separator={"/"} />

      <Box sx={{ width: "70%", mt: "2rem" }}>
        <MyTitle text="Фильмы смотреть онлайн" size="2.5rem" />
        <ShowMoreText
          length={189}
          useDangerouslySetInnerHTML={true}
          buttonText="Развернуть"
          text={text}
          showCollapseButton={true}
        />
      </Box>

      <Stack direction="row" justifyContent="space-between">
        <Box
          id="sortButton"
          sx={{
            position: "relative",
            zIndex: "3",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <SortIcon sx={{ color: "#fff" }} />
          <DropDownItem
            button
            text={store.selectedFilters.order[0]?.name || "Сортировка"}
            name="order"
            store={initialMobxState}
            isTransparent={true}
            isUnderTextNeed={false}
          />
        </Box>
        <MyButton
          startIcon={<ClearIcon />}
          color="transparent"
          text="Сбросить фильтры"
          func={() => rootStore.moviesStore.resetFilters(false)}
        />
      </Stack>

      <FiltersList store={initialMobxState} />
      {urlQueries.slug ? (
        <>
          <MoviesList url={urlQueries.slug} movies={store.movies.rows} />
          <Box>
            <MyButton
              width={"100%"}
              text="Показать еще"
              color="transparent"
              border="1px solid rgba(255,255,255,0.48)"
              func={(e) => handlePagination(e)}
            />
          </Box>
        </>
      ) : (
        <>
          <MoviesList
            movies={store.drama.rows}
            title={"Драмы"}
            swiperButtonId="1"
          />
          <MoviesList
            movies={store.comedy.rows}
            title={"Комедии"}
            swiperButtonId="2"
          />
        </>
      )}
    </Box>
  );
});

export async function getServerSideProps({ req, res, locale, query }) {
  const currentLanguage = req.cookies.currentLanguage;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  rootStore.moviesStore.resetFilters(true);

  let selectedFilters =
    rootStore.moviesStore.updateSelectedFiltersFromUrl(query);

  const apiUrl = rootStore.moviesStore.generateUrl();

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const moviesUrl = `${baseUrl}:3003/info?${apiUrl}&limit=35&`;
  const dramaUrl = `${baseUrl}:3003/info?genres=4&limit=15`;
  const comedyUrl = `${baseUrl}:3003/info?genres=8&limit=15`;
  const countriesUrl = `${baseUrl}:3001/movies/filters/countries`;
  const genresUrl = `${baseUrl}:3001/movies/filters/genres`;

  const order = [
    { nameRu: "Оценки", name: null, id: "ratingKinopoiskVoteCount-DESC" },
    { nameRu: "Рейтинг", name: null, id: "ratingKinopoisk-DESC" },
    { nameRu: "Дата выхода", name: null, id: "year-DESC" },
    {
      nameRu: "Алфавит",
      name: null,
      id: currentLanguage === "ru" ? "nameRu-ASC" : "nameEn-ASC",
    },
  ];

  const [movies, drama, comedy, countries, genres] = await Promise.all([
    fetch(moviesUrl).then((res) => res.json()),
    fetch(dramaUrl).then((res) => res.json()),
    fetch(comedyUrl).then((res) => res.json()),
    fetch(countriesUrl).then((res) => res.json()),
    fetch(genresUrl).then((res) => res.json()),
  ]);

  const hasPageParam = query.slug?.some((param) => param.startsWith("page="));

  if (hasPageParam) {
    rootStore.ssrStore.movies.rows.push(...movies.rows);
  } else {
    rootStore.ssrStore.setMovies(movies, "movies");
  }

  const initialData = {
    movies: rootStore.ssrStore.movies,
    drama,
    comedy,
    countries,
    genres,
    selectedFilters,
    order,
    /*     actors:
    directors: */
  };

  const store = initializeStore(initialData, rootStore);

  const initialMobxState = {
    movies: store.movies,
    drama: store.drama,
    comedy: store.comedy,
    countries: store.countries,
    genres: store.genres,
    selectedFilters: store.selectedFilters,
    order: store.order,
    /*     actors:store.actors,
    directors: store.directors */
  };

  return {
    props: {
      initialMobxState,
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
}

export default Movies;
