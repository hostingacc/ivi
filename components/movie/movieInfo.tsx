import { Box, Stack} from "@mui/material";
import MovieTime from "./movieTime";
import MovieAgeLimit from "./movieAgeLimit";
import ShowMoreText from "../features/showMoreText";
import MyText from "../content/myText";
import GenresAndCountriesList from "./GenresAndCountriesList";
import MovieLanguageInfo from "./movieLanguageInfo";
import MovieName from "../content/translationDynamicData";
import { GenresAndCountries } from "../interfaces/genresAndCountries";
import { Person } from "../interfaces/persons";
import MedallionList from "./medallionsList";
import MovieInfoRating from "./movieInfoRating";


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
            <MovieName nameRu={nameRu} nameEn={nameEn} weight={600} size={'3.75rem'} color={'#fff'} line={'2.9rem'}/>
          </Box>


        <Stack direction="row" sx={{ justifyContent: "center" }} spacing={1}>
          <MyText text={year} align={'center'} color="rgba(255,255,255,.72)"/>
          <MovieTime minutes={+movieLength} />
          <MovieAgeLimit text={ratingAgeLimits} />
        </Stack>
        <GenresAndCountriesList genres={genres} countries={countries}/>
        <MovieLanguageInfo/>

          <MedallionList rating={rating} persons={persons}/>

        
        <Box sx={{mt:'2rem'}}>
          <ShowMoreText text={description} color="rgba(255,255,255,.78)" length={150} buttonText={'Детали о фильме'}/>
        </Box>


        <MovieInfoRating rating={rating} voteCount={ratingVoteCount}/>
      </Box>
    )
}
export default MovieInfo;