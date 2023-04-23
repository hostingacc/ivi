import { Box, Typography, Stack, Button } from "@mui/material";
import FilmTime from "./filmTime";
import FilmAgeLimit from "./filmAgeLimit";
import ShowMoreText from "./showMoreText";
import MyText from "./content/myText";
import GenresAndCountriesList from "./filmGenresAndCountriesList";


interface FilmInfoProps {
    nameRu: string;
    nameEn: string;
    year: number;
    filmLength: string;
    ratingAgeLimits: string;
    genres: string[];
    countries: string[];
    type: string;
    description: string;
  }

const FilmInfo = ({  
    nameRu,
    nameEn,
    year,
    filmLength,
    ratingAgeLimits,
    genres,
    countries,
    type,
    description}:FilmInfoProps) => {


      
    return(
        <Box sx={{color:'#fff', width:'439px'}}>
        <Typography variant="h2">{nameRu}</Typography>
        <Stack direction="row" sx={{alignItems:'center'}} spacing={2}>
          <MyText text={year} align={'center'}/>
          <FilmTime minutes={+filmLength}/>
          <FilmAgeLimit text={ratingAgeLimits}/>
        </Stack>
   {/*      <Stack direction="row" spacing={2}>
          {genres.map((e:any) => (
            <MyText key={e.id} text={e.nameRu} align={'center'}/>
          ))}
          {countries.map((e:any) => (
             <MyText key={e.id} text={e.nameRu} align={'center'}/>
          ))}
        </Stack> */}
        <GenresAndCountriesList genres={genres} countries={countries}/>
  
        {/* Здесь какие-то люди */}
  
        <ShowMoreText text={description} length={150} buttonText={'Детали о фильме'}/>
      </Box>
    )
}
export default FilmInfo;