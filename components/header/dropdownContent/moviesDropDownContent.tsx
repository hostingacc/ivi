import useRequest from "@/hooks/useRequest";
import { Box, Stack, Typography } from "@mui/material";
import MyList from "../../content/myList";
import Hr from "../../content/hr";

import { toJS } from "mobx";
import DropDownSliderList from "@/components/header/dropDownSliderList";


const MoviesDropDownContent = () => {
    const genresUrl = 'http://localhost:3001/movies/filters/genres';


    const genres = useRequest(genresUrl);
    const countries = [
        {nameRu: "Русские"},
        {nameRu: "Зарубежные"},
        {nameRu: "Советское кино"},

    ];
    const features = [
        {content: "Новинки", link:'https://www.ivi.tv/new/movie-new'},
        {content: "Подборки", link:'https://www.ivi.tv/collections'},
        {content:"Рейтинг", link:'/movies/minRating=7'}, 
        {content: "Трейлеры", link:'https://www.ivi.tv/trailers'},
        {content:"Что посмотреть", link:'https://www.ivi.tv/goodmovies'},
        {content:"Фильмы в HD", link:'https://www.ivi.tv/movies-hd'},
        {content:"Выбор иви", link:'https://www.ivi.tv'},
        {contentn:"Новинки подписки", link:'https://www.ivi.tv/collections/very-new-svod?sort=priority_in_collection'},
    ]

    const generateContent = (data) => {
        return data?.map((e) => ({
        link: `/movies/${e.nameRu}`,
        content: e.nameRu,
        }));
    }
    /* придумать как обойтись без generate content */

   
       
    const genresContent = generateContent(genres);
    const countriesContent = generateContent(countries);
    const featuresContent = generateContent(features);

    
    return(
        <Box sx={{p:'0 1rem'}}>
            <Box sx={{mt:'0.1rem'}}>
                <Hr/>
            </Box>

            <Stack direction='row' justifyContent='space-between' sx={{mt:'1rem'}}>
                <Box>
                    <MyList title="Жанры" content={genresContent} itemsPerColumn={8} />
                </Box>
                <Box>
                    <MyList title="Страны" content={countriesContent} itemsPerColumn={8} />
                </Box>
               
                <Box sx={{
                    borderLeft: "1px solid rgba(255,255,255,.2)",
                    height:'110%',
                  
                    
                }}>
         
                      {features.map((f, i) => {
                        return <Typography sx={{
                            color: "rgba(255,255,255,.48)",
                            fontSize: "14px",
                            fontWeight: "600",
                            marginBottom: "10px",
                            paddingLeft: "20px",
                            ":hover": {
                                color: "white",
                                borderLeft: "2px solid white"
                            }
                        }} key={i}>{f.content}</Typography> 

                      
                    })} 
                   

                </Box>
                <DropDownSliderList/>
            </Stack>
        </Box> 
    )
}

export default MoviesDropDownContent;



