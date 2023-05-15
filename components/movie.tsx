
import Image from "next/image";
import Link from "next/link";
import FormattedRating from "./content/formattedRating";
import { Box, Stack} from '@mui/material';

import {
    BookmarkBorderOutlined,
    AutoFixHighOutlined,
    StarBorderPurple500Outlined,
    DoNotDisturbAltOutlined,
  } from '@mui/icons-material';
import MyTooltip from "./content/MyTooltip";
import TranslationDynamicData from "./content/translationDynamicData";

const Movie = ({movie}) => {

    return(
        <Box key={movie.id} sx={{width:'9.5rem', }}>
                    <Link
                        href={{
                        pathname: `/movie/${movie.id}`,
                        query: {
                            id:movie.id,
                        },
                        }}>
                    <Box className="hoverImage" sx={{position:'relative', width:'100%', height:'14.5rem', borderRadius:'0.5rem', overflow:'hidden'}}>
                        <Image
                            src={movie.posterUrlPreview}
                            alt="постер фильма"
                            fill
                        />
                        <Box className="hoverContent" sx={{width:'100%', height:'100%',padding:'1rem'}}>
                            <FormattedRating rating={movie.ratingKinopoisk} smallDecimal={true} color="#fff"/>
                            <Stack spacing={1} sx={{ right: '1rem', top: '1rem', position: 'absolute' }}>
                                <MyTooltip content={<BookmarkBorderOutlined />} text={'Смотреть позже'}/>
                                <MyTooltip content={<AutoFixHighOutlined />} text={'Похожее'}/>
                                <MyTooltip content={<StarBorderPurple500Outlined />} text={'Уже смотрел, оценить'}/>
                                <MyTooltip content={<DoNotDisturbAltOutlined />} text={'Не нравится такое'}/>                           
                            </Stack>   
                        </Box>
                    </Box>
                
                <TranslationDynamicData nameRu={movie.nameRu} nameEn={movie.nameEn} weight={700} color="#fff" align="left"/>
                {/* Здесь должен быть компонент showmoretext, но нужно его поправить, чтобы он мог принимать английский текст */}
            </Link>
        </Box>   
    )
}

export default Movie;