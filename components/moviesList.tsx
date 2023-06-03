import React from "react";
import { Box } from '@mui/material';
import { useState } from "react";
import Movie from "./movie";
import {Movies} from "./interfaces/movie";
import MyLink from "./navigation/myLink";

import { observer } from "mobx-react-lite";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import {useWindowSize} from '../hooks/useWindowSize';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


interface MoviesListProps {
    url?: any;
    movies: Movie[];
    title?: string;
    swiperButtonId?: string;
}

const MoviesList = observer(({url ,movies, title, swiperButtonId}:MoviesListProps) => {
 
    const size = useWindowSize();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    let slidesPerView = 7;

    if (size.width) {
        if (size.width <= 329) {
          slidesPerView = 2;
        } else if (size.width <= 512) {
          slidesPerView = 3;
        } else if (size.width <= 599) {
          slidesPerView = 4;
        } else if (size.width <= 744) {
          slidesPerView = 3;
        } else if (size.width <= 920) {
          slidesPerView = 4;
        } else if (size.width <= 1096) {
          slidesPerView = 5;
        } else if (size.width <= 1272) {
          slidesPerView = 6;
        }
      }

    return(

            <Box sx={{  mt: '1rem', mb:'2rem' }}>
                 {title && <MyLink link={`/movies/${title}`} content={title} fontSize="1.5rem" fontWeight={700} color="#fff"/>}
                <Box sx={{ display: 'flex', flexWrap: 'wrap',justifyContent: movies?.length > slidesPerView ? 'space-between' : 'flex-start' , gap: '1rem', mt:'1rem', position:'relative'}}>  
                
                {swiperButtonId ?(
                  <>
               <div
                  className={`swiper-next swiper-button-next${swiperButtonId}`}
                  style={{ visibility: isEnd ? 'hidden' : 'visible' }}
                >
                  <ArrowForwardIosIcon sx={{ color: '#fff', fontSize: '3rem' }} />
                </div>

                <div
                  className={`swiper-prev swiper-button-prev${swiperButtonId}`}
                  style={{ visibility: isBeginning ? 'hidden' : 'visible' }}
                >
                  <ArrowBackIosIcon sx={{ color: '#fff', fontSize: '3rem' }} />
                </div>
                  </>
                  ): null
                  }
            
                {movies?.length < slidesPerView || url   ? (
                    movies?.map((movie) => <Movie key={movie.id} movie={movie} />)
                    ) : (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={slidesPerView}
                        slidesPerGroup={slidesPerView - 1}
                        speed={1000}
                        navigation={{
                          nextEl: `.swiper-button-next${swiperButtonId}`,
                          prevEl: `.swiper-button-prev${swiperButtonId}`,
                      }}
                      onReachBeginning={() => setIsBeginning(true)}
                      onReachEnd={() => setIsEnd(true)}
                      onFromEdge={() => {
                        setIsBeginning(false);
                        setIsEnd(false);
                      }}
                    >
                        {movies?.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <Movie movie={movie} />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                    )} 
        
                
                </Box> 
            </Box>
    )
});

export default MoviesList;