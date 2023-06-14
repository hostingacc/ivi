import Image from "next/image";
import MyTitle from "@/components/content/myTitle";
import { Box, Container, Stack } from "@mui/material";
import MyText from "@/components/content/myText";
import Hr from "@/components/content/hr";
import TranslationDynamicData from "@/components/content/translationDynamicData";
import FormattedRating from "@/components/content/formattedRating";
import MyButton from "@/components/controls/buttons/myButton";
import BackButton from "@/components/controls/navigation/backButton";
import Link from "next/link";
import MyBreadcrumbs from "@/components/controls/navigation/myBreadcrumbs";
import { initializeStore, useStore } from "@/store/ssrStore";
import { rootStore } from "@/store/RootStore";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Person = ({ initialMobxState }: any) => {
  const store = useStore(initialMobxState, rootStore);

  const breadcrumbs = [
    { text: "мой Иви", href: "/" },
    { text: store.person?.person?.nameRu, href: `` },
  ];

  const getNoun = (number, one, two, five) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  };

  return (
    <Box sx={{ mb: "4rem", "@media (max-width: 1200px)": {} }}>
      <BackButton />
      <Container
        maxWidth={false}
        sx={{
          width: "37.25rem",
          "@media (max-width: 1200px)": { width: "58rem" },
          "@media (max-width: 876px)": { width: "100%", mt: "2rem" },
        }}
      >
        {store.person && (
          <>
            <Box
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                width: "7.5rem",
                height: "7.5rem",
                position: "relative",
                "@media (max-width: 876px)": {
                  width: "12rem",
                  height: "12rem",
                },
              }}
            >
              <Image
                fill
                style={{ objectFit: "cover" }}
                src={store.person.person.posterUrl}
                alt={store.person.person.nameRu}
              />
            </Box>
            <Box
              sx={{ mt: "1rem", "@media (max-width: 876px)": { mt: "2rem" } }}
            >
              <MyTitle text={store.person.person.nameRu} size="3.5rem" />
            </Box>

            <Box
              sx={{ mt: "1rem", "@media (max-width: 876px)": { mt: "2rem" } }}
            >
              <MyText text={store.person.person.nameEn} size="1.75rem" />
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ mt: "3rem" }}
            >
              <MyTitle text={"Полная фильмография"} />
              <MyText
                text={`${store.person.movies.length} ${getNoun(
                  store.person.movies.length,
                  "фильм",
                  "фильма",
                  "фильмов"
                )}`}
                size="1.25rem"
              />
            </Stack>

            <Box sx={{ mt: "3rem" }}>
              <Hr />
            </Box>

            {store.person.movies.map((movie) => {
              return (
                <Box
                  key={movie.id}
                  sx={{
                    "@media (max-width: 876px)": {
                      mt: "2rem",
                    },
                  }}
                >
                  <Link
                    href={{
                      pathname: `/movie/${movie.id}`,
                      query: {
                        id: movie.id,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        alignItems: "center",
                        "@media (max-width: 576px)": {
                          alignItems: "stretch",
                        },
                      }}
                    >
                      <Image
                        src={movie.posterUrl}
                        width={80}
                        height={122}
                        alt={movie.nameRu}
                      ></Image>
                      <Box
                        sx={{
                          display: "flex",
                          width: "100%",
                          flexDirection: "row",
                          "@media (max-width: 576px)": {
                            flexDirection: "column",
                            justifyContent: "space-between",
                            ml: "1rem",
                          },
                        }}
                      >
                        <Box
                          flexGrow={1}
                          sx={{
                            pl: "1rem",
                            "@media (max-width: 576px)": {
                              pl: "unset",
                            },
                          }}
                        >
                          <Box>
                            <MyText
                              text={movie.year}
                              align={"left"}
                              color={"#fff"}
                              size={"16px"}
                              weight={500}
                            />
                          </Box>
                          <Box
                            sx={{
                              "@media (max-width: 876px)": {
                                mt: "1rem",
                              },
                            }}
                          >
                            <TranslationDynamicData
                              nameRu={movie.nameRu}
                              line={"20px"}
                              nameEn={movie.nameEn}
                              align={"left"}
                              color={"#fff"}
                              weight={500}
                            />
                          </Box>
                          <Stack
                            direction="row"
                            alignItems={"center"}
                            gap={1}
                            sx={{
                              "@media (max-width: 876px)": {
                                mt: "0.9rem",
                              },
                            }}
                          >
                            <MyText
                              text="Рейтинг Иви:"
                              color="#a5a1b2"
                              size="14px"
                            />
                            <FormattedRating
                              rating={movie.ratingKinopoisk}
                              color={"#a5a1b2"}
                              fontSize="16px"
                            />
                          </Stack>
                        </Box>
                        <MyButton
                          text="Подробнее"
                          hoverColor="#3e3659"
                          width="8.75rem"
                          mobileWidth="100%"
                        />
                      </Box>
                    </Box>
                  </Link>
                </Box>
              );
            })}
          </>
        )}
      </Container>
      <Box sx={{ mt: "2rem", display: "flex", justifyContent: "center" }}>
        <MyBreadcrumbs links={breadcrumbs} />
      </Box>
    </Box>
  );
};
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export async function getServerSideProps({ query, res, locale }) {
  const { id } = query;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const personUrl = `${baseUrl}:3003/info/person/${id}`;
  const person = await fetch(personUrl).then((res) => res.json());

  const initialData = {
    person,
  };

  const store = initializeStore(initialData, rootStore);

  const initialMobxState = {
    person: store.person,
  };

  return {
    props: {
      initialMobxState,
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
}

export default person;
