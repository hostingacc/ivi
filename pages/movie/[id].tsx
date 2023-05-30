import MovieInfo from "@/components/movie/movieInfo";
import MovieTrailer from "@/components/movie/movieTrailer";
import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import MoviePersons from "@/components/movie/moviePersons";
import MyBreadcrumbs from "@/components/navigation/myBreadcrumbs";
import MovieDevices from "@/components/movie/devices";
import MovieReviews from "@/components/movie/movieReviews";
import MovieModal from "@/components/movie/movieModal";
import ShowMoreText from "@/components/features/showMoreText";
import MovieName from "../../components/content/translationDynamicData";
import MovieInfoRating from "@/components/movie/movieInfoRating";
import { initializeStore, useStore } from '@/store/ssrStore';
import { toJS } from "mobx";
import { rootStore } from "@/store/RootStore";


const movieCard = ({initialMobxState}:any) => {

  const store = useStore(initialMobxState, rootStore)
  const { movie, videos, comments, persons } = initialMobxState;

    const router = useRouter()
    const id = Array.isArray(router.query.id) ? Number(router.query.id[0]) : Number(router.query.id);


    const topBreadcrumbs = [
      {text:'фильмы', href:'/movies/all'},
      {text: store.movie?.genres[0].nameRu, href:`/movies/${store.movie?.genres[0].nameRu}`},
    ]

    const bottomBreadcrumbs = [
      {text:'мой Иви', href:'/'},
      {text:'фильмы', href:'/movies/all'},
      {text: movie?.genres[0].nameRu, href:`/movies/${movie?.genres[0].nameRu}`},
      {text: movie?.nameRu, href:''}
    ]


    return(
      <>
      <Container maxWidth={false} sx={{ width: '77.5rem' }}>
        <MyBreadcrumbs links={topBreadcrumbs}/>
     
        <>
      {movie && (
        <>
        <Box sx={{
            display:'flex',
            position:"relative",
            '@media (max-width:1159px)': {
              flexDirection: 'column',
            },
          }}
          >
        <Box sx={{
            mt:'2rem',
            '@media (min-width:1159px)': {
              display:'none',
             
            },}}>
              <MovieName nameRu={movie.nameRu} nameEn={movie.nameEn} weight={600} size={'3.75rem'} color={'#fff'} line={'2.9rem'} align={'left'}/>
        </Box>

          <MovieTrailer video={videos} rating={movie.ratingKinopoisk} persons={persons}/>

        <Box sx={{
            ml:'auto',
            '@media (max-width:1159px)': {
              display:'none',
            },}}>
            <MovieInfo
              nameRu={movie.nameRu}
              nameEn={movie.nameEn}
              year={movie.year}
              movieLength={movie.filmLength}
              ratingAgeLimits={movie.ratingAgeLimits}
              genres={movie.genres}
              countries={movie.countries}
              type={movie.type}
              description={movie.description}
              rating={movie.ratingKinopoisk}
              ratingVoteCount={movie.ratingKinopoiskVoteCount}
              persons={persons} 
            /> 
        </Box>
        <Box sx={{
            mb:'2rem',
            '@media (min-width:1159px)': {
              display:'none',

            },}}>

        <Box sx={{width:'42rem'}}>
          <ShowMoreText text={movie.description} color="rgba(255,255,255,.78)" length={350} buttonText={'Детали о фильме'}/>
          <MovieInfoRating rating={movie.ratingKinopoisk} voteCount={movie.ratingKinopoiskVoteCount}/>
        </Box>
        </Box>

        </Box>
        <MoviePersons
            persons={persons}
            nameRu={movie.nameRu}
            nameEn={movie.nameEn}
            year={movie.year}
            countries={movie.countries}
            comments={comments}
            id={movie.id}
           
          /> 
          <MovieReviews comments={comments}/>
          <MovieDevices 
            nameRu={movie.nameRu}
            nameEn={movie.nameEn}
            poster={movie.posterUrlPreview}

          />
        </>
      )}
    </>
    <MovieModal persons={persons} comments={comments} movieId={id || 0}/>
    <Box sx={{mb:'2rem'}}>
      <MyBreadcrumbs links={bottomBreadcrumbs}/>
    </Box>


    </Container>
    
    </>
    )
}

export async function getServerSideProps(context) {
  const store = initializeStore(null, rootStore)
  const { id } = context.query;
  const url = id ? 'http://192.168.0.102:3001/movies/' + id : undefined;
  const videoUrl = id ? url + '/videos' : undefined;
  const commentsUrl = id ? 'http://192.168.0.102:3004/comments/' + id + '/flat' : undefined;
  const personsUrl = id ? 'http://192.168.0.102:3005/persons/' + id : undefined;

  const [movie, videos, comments, persons] = await Promise.all([
    url ? fetch(url).then((res) => res.json()) : Promise.resolve(undefined),
    videoUrl ? fetch(videoUrl).then((res) => res.json()) : Promise.resolve(undefined),
    commentsUrl ? fetch(commentsUrl).then((res) => res.json()) : Promise.resolve(undefined),
    personsUrl ? fetch(personsUrl).then((res) => res.json()) : Promise.resolve(undefined),
  ]);
  store.setMovie(movie);
  store.setVideos(videos);
  store.setComments(comments);
  store.setPersons(persons);

 
  
  const initialMobxState = {
    movie: store.movie,
    videos: store.countries,
    comments: store.comments,
    persons: store.persons
  };

  return {
    props:{
      initialMobxState
    }
  };
}


export default movieCard;



