import GenresList from "@/components/admin/genresList";
import useRequest from "@/hooks/useRequest";
import { Container, Box } from "@mui/material";
import MyButton from "@/components/buttons/myButton";
import { useState} from "react";

import MyText from "@/components/content/myText";
import MyInput from "@/components/features/myInput";

const Admin = () => {

    const genresUrl = 'http://localhost:3001/movies/filters/genres';
    const genres = useRequest(genresUrl);
  
    const url = 'http://localhost:3003/info?&keywords=';
    const [keywords, setKeywords] = useState('');
    const [data, setData] = useState<any | null>(null);
  
    const result = useRequest(`${url}${keywords}`);
  
    const submit = () => {
        if(keywords){
            setData(result);
        }
    };


    return(
        <Container maxWidth={false} sx={{ width: '1240px', mb:'1rem' }}>


            <GenresList genres={genres}/>

            <MyInput label={"Введите название фильма"} setState={setKeywords}/>
            <MyButton func={submit} text="Найти"/>
            
            {data?.rows.map(film=>{
                return(
                    <Box key={film.id}>
                        <MyText text={film.nameRu}/>
                        <MyText text={film.nameEn}/>
                    </Box>
                )
            })}
        </Container>
    )
}

export default Admin;