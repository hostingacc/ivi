import useRequest from "@/hooks/useRequest";


import Image from "next/image";
import Link from "next/link";
import FormattedRating from "./content/formattedRating";
import { Box, Container, Stack} from '@mui/material';

import {
    BookmarkBorderOutlined,
    AutoFixHighOutlined,
    StarBorderPurple500Outlined,
    DoNotDisturbAltOutlined,
  } from '@mui/icons-material';
import MyTooltip from "./content/MyTooltip";
import FilmName from "./content/filmName";

const Film = ({film}) => {

    return(
        <Box key={film.id} sx={{width:'9.5rem', }}>
                    <Link
                        href={{
                        pathname: `/filmPage/${film.id}`,
                        query: {
                            id:film.id,
                        },
                        }}>
                    <Box className="hoverImage" sx={{position:'relative', width:'100%', height:'14.5rem'}}>
                        <Image
                            src={film.posterUrlPreview}
                            alt="постер фильма"
                            fill
                        />
                        <Box className="hoverContent" sx={{width:'100%', height:'100%',padding:'1rem'}}>
                            <FormattedRating rating={film.ratingKinopoisk} smallDecimal={true}/>
                            <Stack spacing={1} sx={{ right: '2rem', top: '1rem', position: 'absolute' }}>
                                <MyTooltip content={<BookmarkBorderOutlined />} text={'Смотреть позже'}/>
                                <MyTooltip content={<AutoFixHighOutlined />} text={'Похожее'}/>
                                <MyTooltip content={<StarBorderPurple500Outlined />} text={'Уже смотрел, оценить'}/>
                                <MyTooltip content={<DoNotDisturbAltOutlined />} text={'Не нравится такое'}/>                           
                            </Stack>   
                        </Box>
                    </Box>
                <FilmName nameRu={film.nameRu} nameEn={film.nameEn} align="left"/>
            </Link>
        </Box>   
    )
}

export default Film;