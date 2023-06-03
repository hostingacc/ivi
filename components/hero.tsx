import { Box,} from '@mui/material'

import React from 'react'
import Image from 'next/image';
import { Autoplay, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "../styles/Hero.module.css"
import Link from 'next/link';
import MyLink from './navigation/myLink';
import MyButton from './buttons/myButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const slides: string[] = [
    "/slider/chicago.jpeg", "/slider/cosmos.jpeg", "/slider/crush.jpeg",
    "/slider/eskort.jpeg", "/slider/false.jpeg", "/slider/family.jpeg",
    "/slider/fortuna.jpeg", "/slider/human.jpeg",
    "/slider/kills.jpeg", "/slider/listen.jpeg", "/slider/marlou.jpeg",
    "/slider/minute.jpeg", "/slider/money.jpeg", "/slider/moris.jpeg",
    "/slider/nevskiy.jpeg", "/slider/nolimit.jpeg", "/slider/norton.jpeg",
    "/slider/prince.jpeg", "/slider/sabyanin.jpeg", "/slider/shpion.jpeg",
    "/slider/sleeptalk.jpeg", "/slider/snowrod.jpeg", "/slider/three.jpeg",
    "/slider/universe.jpeg", "/slider/voin.jpeg", "/slider/withall.jpeg"
]


const Hero = () => {
    return (
        <Box  sx={{width:'100%', height:'100%', display:'flex', justifyContent:'center', position:'relative'}}>
                    <>
           {/*          <div className={`swiper-next swiper-button-next`}>
                        <ArrowForwardIosIcon  sx={{color:'#fff', fontSize:'3rem'}}/>
                  </div>
               
                  <div className={`swiper-prev swiper-button-prev`}>
                      <ArrowBackIosIcon sx={{color:'#fff', fontSize:'3rem'}}/> 
                  </div> */}
                  </>
            <Swiper
                modules={[Autoplay, Navigation, A11y]}
                spaceBetween={20}
                initialSlide={2}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                style={{overflow:'visible', width:'100%'}}
                slidesPerView={1}
                navigation={true}             
            >
                {slides.map((slide, i) => {
                    return <SwiperSlide className={styles.slide} style={{width:'100%' }}  key={i}>
                        <Box
                            className={styles.container}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                width:'100%',
                                height:'100%'
                            }}>
                            <Image
                                src={slide}
                                alt='Slider'
                               
                                fill
                                className={styles.image}
                                style={{
                                    borderRadius: "20px"
                                }}
                            />
                            <Box sx={{
                                position:'absolute',
                                bottom:'1.25rem',
                                left:'6.25rem'
                            }}>
                                <MyLink 
                                    link='/movies'
                                    content={
                                        <MyButton text='Смотреть бесплатно' color='#ea003d'/>
                                    }/>
                            </Box>
                        
                        </Box>
                    </SwiperSlide>
                })}               
            </Swiper>
        </Box >
    )
}

export default Hero;