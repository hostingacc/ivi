import useRequest from "@/hooks/useRequest";
import { Container, Box } from "@mui/material";
import MyButton from "@/components/controls/buttons/myButton";
import { useState } from "react";

import MyText from "@/components/content/myText";
import MyInput from "@/components/controls/myInput";
import { Movies } from "@/interfaces/movie";
import GenresList from "@/components/sections/admin/genresList";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Admin = () => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL;

  const genresUrl = `${envUrl}/movies/filters/genres`;
  const genres = useRequest(genresUrl);

  const url = `${envUrl}:3003/info?&keywords=`;
  const [keywords, setKeywords] = useState("");
  const [data, setData] = useState<Movies | null>(null);

  const result = useRequest(`${url}${keywords}`);

  const submit = () => {
    if (keywords) {
      setData(result);
    }
  };

  return (
    <Container maxWidth={false} sx={{ width: "77.5rem", mb: "1rem" }}>
      <GenresList genres={genres} />

      <MyInput label={"Введите название фильма"} setState={setKeywords} />
      <MyButton func={submit} text="Найти" />

      {data?.rows.map((movie) => {
        return (
          <Box key={movie.id}>
            <MyText text={movie.nameRu} />
            <MyText text={movie.nameEn} />
          </Box>
        );
      })}
    </Container>
  );
};

export async function getServerSideProps({locale, req}) {
  // Get the user's role from the request object
 // const userRole = context.req.user.role;

 console.log(req.user)



/*   if (userRole !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
 */

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
}




export default Admin;

