import useRequest from "@/hooks/useRequest";


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Box, Container, Stack} from '@mui/material';
import FormattedRating from "./content/formattedRating";


import {
    BookmarkBorderOutlined,
    AutoFixHighOutlined,
    StarBorderPurple500Outlined,
    DoNotDisturbAltOutlined,
  } from '@mui/icons-material';
import MyTooltip from "./content/MyTooltip";
import MyTitle from "./content/myTitle";

import Slider from "./features/slider";

import FilmName from "./content/translationDynamicData";
import Film from "./movie";

const MoviesList = ({films}) => {

    const SliderContent = films?.rows.map((film) => <Film key={film.id} film={film} />);
   


    return(

            <Box sx={{  mt: '10rem', mb:'10rem' }}>
                <MyTitle text="Все фильмы"/>

               {/*  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', mt:'1rem'}}>  */}
                {/* <Container maxWidth={false} sx={{ width: '1240px', mb: '1rem', paddingLeft: '0 !important', height:'20rem', display:'flex', alignItems:'center', overflowX:'hidden'  }}> */}
                    {/* <Slider  content={SliderContent} itemsCount={SliderContent?.length} itemsToShow={6} containerWidth={74.2} itemWidth={9.499}/> */}
               {/*  </Container> */}

                <Stack direction='row' flexWrap='wrap' justifyContent='flex-start' gap={2.5} sx={{mt:'1rem'}}>
                    {films?.rows.map((film) => (
                        <Film key={film.id} film={film} />
                    ))}
                </Stack>
             

                {/* </Box> */}
        </Box>

    )
};

export default MoviesList;