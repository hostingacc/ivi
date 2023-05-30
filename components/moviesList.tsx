import React from "react";
import { Box,  Stack } from '@mui/material';

import Movie from "./movie";
import {Movies} from "./interfaces/movie";
import MyLink from "./navigation/myLink";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

interface MoviesListProps {
    movies: Movies;
    title: string;
}

const MoviesList = observer(({movies, title}:MoviesListProps) => {
 


    return(

            <Box sx={{  mt: '5rem', mb:'2rem' }}>
                <MyLink link={`/movies/${title}`} content={title} fontSize="1.5rem" fontWeight={700} color="#fff"/>

               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', mt:'1rem'}}>  


                <Stack direction='row' flexWrap='wrap' justifyContent='flex-start' gap={2.5} sx={{mt:'1rem'}}>
                    {movies?.rows.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </Stack>


                </Box> 
            </Box>

    )
});

export default MoviesList;