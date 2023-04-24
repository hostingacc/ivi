import useRequest from "@/hooks/useRequest";

import MyLink from "./navigation/myLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Box, Container} from '@mui/material';
import MyText from "./content/myText";

const FilmList = () => {


    const url = 'http://localhost:3003/info'

    const films:any = useRequest(url);


    console.log(films)
    
    return(
        <Container maxWidth={false} sx={{ width: '1240px' }}>
        <Box sx={{  mt: '10rem', mb:'10rem' }}>
            <MyLink link="/" text="Все фильмы" fontSize="24px" fontWeight={700}/>

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
                     <Image
                        className="hoverImage"
                        src={film.posterUrlPreview}
                        alt="постер фильма"
                        width={153}
                        height={235}
                        />
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