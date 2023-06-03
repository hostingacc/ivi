import { Box } from "@mui/material";

import ShowMoreText from "../features/showMoreText";
import MovieName from "../content/translationDynamicData";
import { GenresAndCountries } from "../interfaces/genresAndCountries";
import { Person } from "../interfaces/persons";
import MedallionList from "./medallionsList";
import MovieInfoRating from "./movieInfoRating";
import MovieDetails from "./movieDetails";
import TranslationDynamicData from "../content/translationDynamicData";

interface MovieInfoProps {
    nameRu: string;
    nameEn: string;
    year: number;
    movieLength: string;
    ratingAgeLimits: string;
    genres: GenresAndCountries[];
    countries: GenresAndCountries[];
    type: string;
    description: string;
    persons:Person[];
    rating:number;
    ratingVoteCount:number;
  }

const MovieInfo = ({  
    nameRu,
    nameEn,
    year,
    movieLength,
    ratingAgeLimits,
    genres,
    countries,
    ratingVoteCount,
    persons,
    description,
    rating}:MovieInfoProps) => {

      
    

    return(
        <Box sx={{color:'#fff', width:'27.43rem', ml:'auto'}}>
          <Box sx={{mb:'2rem'}}>
            <TranslationDynamicData nameRu={`Фильм ${nameRu} смотреть онлайн`} nameEn={`Movie ${nameEn} watch online`} weight={700} size={'3rem'} color={'#fff'} line={'52px'} align={'center'}/>
          </Box>
        <MovieDetails year={year} movieLength={movieLength} ratingAgeLimits={ratingAgeLimits} genres={genres} countries={countries}/>
        <MedallionList rating={rating} persons={persons}/>
        <Box sx={{mt:'2rem'}}>
          <ShowMoreText text={description} color="rgba(255,255,255,.78)" length={150} buttonText={'Детали о фильме'}/>
        </Box>
        <MovieInfoRating rating={rating} voteCount={ratingVoteCount} />
      </Box>
    )
}
export default MovieInfo;