import { Stack, Box } from "@mui/material";
import MyText from "../content/myText";
import MovieTime from "./movieTime";
import MovieAgeLimit from './movieAgeLimit'
import GenresAndCountriesList from "./GenresAndCountriesList";
import MovieLanguageInfo from "./movieLanguageInfo";
import { GenresAndCountries } from "../interfaces/genresAndCountries";


interface MovieDetails{
    year: number;
    movieLength: string;
    ratingAgeLimits: string;
    genres: GenresAndCountries[];
    countries: GenresAndCountries[];
    justifyContent?: string;
}

const MovieDetails = ({year, movieLength, ratingAgeLimits, genres, countries, justifyContent = 'center'}) => {


    return(
        <Box sx={{color:'#fff'}}>
            <Stack direction="row" sx={{
                justifyContent,
             }} spacing={1}>
                <MyText text={year} align={'center'} color="rgba(255,255,255,.72)" size={'16px'}/>
                <MovieTime minutes={+movieLength} />
                <MovieAgeLimit text={ratingAgeLimits} />
            </Stack>
            <GenresAndCountriesList genres={genres} countries={countries}/>
            <MovieLanguageInfo justifyContent={justifyContent}/>
        </Box>
    )
}


export default MovieDetails;