import useRequest from "@/hooks/useRequest";

import MyLink from "./navigation/myLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Box, Container, Stack, Typography, Tooltip} from '@mui/material';
import MyText from "./content/myText";
import FormattedRating from "./content/formattedRating";
import FilmGenresAndCountriesList from './filmPage/filmGenresAndCountriesList';

import {
    BookmarkBorderOutlined,
    AutoFixHighOutlined,
    StarBorderPurple500Outlined,
    DoNotDisturbAltOutlined,
  } from '@mui/icons-material';
import MyTooltip from "./content/MyTooltip";
import MyTitle from "./content/myTitle";

const FilmList = () => {


    const url = 'http://localhost:3003/info';

    const films:any = useRequest(url);

    console.log(films)
    
    return(
        <Container maxWidth={false} sx={{ width: '1240px' }}>
        <Box sx={{  mt: '10rem', mb:'10rem' }}>
            <MyTitle text="Все фильмы"/>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', mt:'1rem'}}>
                {films?.rows.map((film:any)=>{
                    return(
                        <React.Fragment key={film.id}>
                       <Link
                            href={{
                            pathname: `/filmCard/${film.id}`,
                            query: {
                                id:film.id,
                            },
                            }}>
                <Box className="hoverImage">
                    <Image
                        src={film.posterUrlPreview}
                        alt="постер фильма"
                        width={153}
                        height={235}
                    />
                    <Box className="hoverContent" sx={{width:'100%', height:'100%',padding:'1rem'}}>
                        <FormattedRating rating={film.ratingKinopoisk} smallDecimal={true}/>

                        <Stack spacing={1} sx={{ right: '1rem', top: '1rem', position: 'absolute' }}>
                            <MyTooltip content={<BookmarkBorderOutlined />} text={'Смотреть позже'}/>
                            <MyTooltip content={<AutoFixHighOutlined />} text={'Похожее'}/>
                            <MyTooltip content={<StarBorderPurple500Outlined />} text={'Уже смотрел, оценить'}/>
                            <MyTooltip content={<DoNotDisturbAltOutlined />} text={'Не нравится такое'}/>                           
                        </Stack>
                        
                    </Box>
                </Box>
                        <MyText text={film.nameRu} align="left"/>
                        </Link>
                        

                        </React.Fragment>
                    )
                })}
          
               
            </Box>
        </Box>
        </Container>
    )
}

export default FilmList;