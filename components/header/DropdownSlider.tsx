import { Box } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styles from "../../styles/DropdownSlider.module.css";

const slides = [
 "/slider/chicago.jpeg", "/slider/cosmos.jpeg", "/slider/crush.jpeg",
 "/slider/eskort.jpeg", "/slider/false.jpeg", "/slider/family.jpeg",
 "/slider/fortuna.jpeg", "/slider/hello.jpeg", "/slider/human.jpeg",
 "/slider/kills.jpeg", "/slider/listen.jpeg", "/slider/marlou.jpeg",
 "/slider/minute.jpeg", "/slider/money.jpeg", "/slider/moris.jpeg",
 "/slider/nevskiy.jpeg", "/slider/nolimit.jpeg", "/slider/norton.jpeg",
 "/slider/prince.jpeg", "/slider/sabyanin.jpeg", "/slider/shpion.jpeg",
 "/slider/sleeptalk.jpeg", "/slider/snowrod.jpeg", "/slider/three.jpeg",
 "/slider/universe.jpeg", "/slider/voin.jpeg", "/slider/withall.jpeg"
]

const DropdownSlider = ({ scrollDirection }) => {

const [randomizedSlides, setRandomizedSlides] = useState<string[]>([]);

    useEffect(()=>{
        setRandomizedSlides([...slides].sort(() => Math.random() - 0.5))
    },[])

 return (
    <Box className={styles.slider}>
        <Box className={`${styles.track} ${styles[scrollDirection]}`}>
            {randomizedSlides.map((slide, i) => (
                <Box sx={{position:'relative'}} className={styles.slide} key={i}>
                    <Image
                        src={slide}
                        alt='Slider'
                        fill
                        className={styles.img}
                        sizes="(max-width: 600px) 100vw, 50vw"
                    />
                </Box>
            ))}
    </Box>
 </Box>
 )
}
export default DropdownSlider;
