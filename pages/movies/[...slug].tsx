import MoviesList from "@/components/moviesList";
import { Box, Container } from "@mui/material";
import FiltersList from "@/components/moviesPage/filtersList";
import { observer } from "mobx-react-lite";
import { initializeStore, useStore } from "@/store/ssrStore";
import { rootStore } from "@/store/RootStore";
import { useRouter } from "next/router";
import SortIcon from '@mui/icons-material/Sort';
import DropDownItem from "@/components/moviesPage/dropDownItem";
import MyButton from "@/components/buttons/myButton";
import { translationStore } from "@/store/translationStore";
import MyBreadcrumbs from "@/components/navigation/myBreadcrumbs";
import { useEffect } from "react";


interface Filter {
  id: number;
}

const Movies = observer(({initialMobxState}:any) => {

  const store = useStore(initialMobxState, rootStore)
    
  const router = useRouter();
  const urlQueries  = router.query;


  const handlePagination = async () => {
    rootStore.moviesStore.pagination();
    const movies = await fetch(rootStore.moviesStore.url).then(res => res.json());
    store.setMovies(movies, 'movies', true);

  }

  const genreBreadcrumbs = rootStore.moviesStore.selectedFilters.genres.map(genre => ({
    text: genre.name,
    href: ``,
  }));
  
  const breadcrumbs = [
    {text:'мой Иви', href:'/'},
    {text:'фильмы', href:'/movies/all'},
    ...genreBreadcrumbs,
  ]

  useEffect(()=>{
    rootStore.moviesStore.updateSelectedFiltersFromUrl(urlQueries)
  },[])

  const sortTypes = [{nameRu:'По количеству оценок', name:null, id:'ratingKinopoiskVoteCount-DESC'},{nameRu:'По рейтингу', name:null, id:'ratingKinopoisk-DESC'},{nameRu:'По дате выхода', name:null ,id:'year-DESC'}, {nameRu:'По алфавиту', name:null ,id:translationStore.translation==='ru' ? 'nameRu-ASC' : 'nameEn-ASC'}];

    return(
            <Container maxWidth={false} sx={{ width: '77.5rem', mb:'1rem' }}>
              <MyBreadcrumbs links={breadcrumbs} separator={'/'}/>
              <Box id="sortButton" sx={{position:'relative',zIndex:'3', display:'flex', alignItems:'center'}}>
              <SortIcon sx={{color:'#fff'}}/>
              <DropDownItem 
                  button
                  text={rootStore.moviesStore.selectedFilters.order[0]?.name ||  'Сортировка'} /* Здесь должна быть выбранная сортировка */
                  name="order"
                  content={sortTypes}
                  isTransparent={true}
                  isUnderTextNeed={false}
                />
              </Box>

                <FiltersList store={store}/>
                <MoviesList movies = {store.movies} title="Все"/>

                <MyButton text="Показать еще" func={handlePagination}/> 
            </Container>
        
    )
});


export async function getServerSideProps(context) {
  const store = initializeStore(null, rootStore)
  const moviesUrl = `http://192.168.0.102:3003/info?limit=${rootStore.moviesStore.limit}&page=${rootStore.moviesStore.page}`


  const [movies, countries, genres] = await Promise.all([
    fetch(moviesUrl).then(res => res.json()),
    fetch('http://192.168.0.102:3001/movies/filters/countries').then(res => res.json()),
    fetch('http://192.168.0.102:3001/movies/filters/genres').then(res => res.json())
  ]);
  store.setMovies(movies, 'movies');
  store.setCountries(countries);
  store.setGenres(genres);

  const initialMobxState = {
    movies: store.movies,
    countries: store.countries,
    genres: store.genres,
  };


  return {
    props: {
      initialMobxState,
    },
  }
}


export default Movies;

