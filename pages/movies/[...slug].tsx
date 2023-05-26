import MoviesList from "@/components/moviesList";
import { Box, Container } from "@mui/material";

import FiltersList from "@/components/moviesPage/filtersList";
import { useEffect, useState} from "react";

import { observer } from "mobx-react-lite";
import { moviesStore } from "@/store/moviesStore";
import { useRouter } from "next/router";
import SortIcon from '@mui/icons-material/Sort';
import DropDownItem from "@/components/moviesPage/dropDownItem";
import { toJS } from "mobx";
import MyButton from "@/components/buttons/myButton";
import { translationStore } from "@/store/translationStore";
import MyBreadcrumbs from "@/components/navigation/myBreadcrumbs";

interface Filter {
  id: number;
}

const Movies = observer(() => {
    
  const router = useRouter();
  const urlQueries  = router.query;
  const [isHydrated, setIsHydrated] = useState(false);
  const [hasLoadedFilters, setHasLoadedFilters] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if(urlQueries.slug){
      if (!hasLoadedFilters && urlQueries.slug.length > 0) {
        moviesStore.loadFilters(urlQueries);
        setHasLoadedFilters(true);
      }
    }
  }, [urlQueries, hasLoadedFilters]);


  const genreBreadcrumbs = moviesStore.selectedFilters.genres.map(genre => ({
    text: genre.name,
    href: ``,
  }));
  

  const breadcrumbs = [
    {text:'мой Иви', href:'/'},
    {text:'фильмы', href:'/movies/all'},
    ...genreBreadcrumbs,
  ]
  

  if (!isHydrated) {
    return null;
  }

  const sortTypes = [{nameRu:'По количеству оценок', name:null, id:'ratingKinopoiskVoteCount-DESC'},{nameRu:'По рейтингу', name:null, id:'ratingKinopoisk-DESC'},{nameRu:'По дате выхода', name:null ,id:'year-DESC'}, {nameRu:'По алфавиту', name:null ,id:translationStore.translation==='ru' ? 'nameRu-ASC' : 'nameEn-ASC'}];



    return(
            <Container maxWidth={false} sx={{ width: '77.5rem', mb:'1rem' }}>
              <MyBreadcrumbs links={breadcrumbs} separator={'/'}/>
              <Box id="sortButton" sx={{position:'relative',zIndex:'3', display:'flex', alignItems:'center'}}>
              <SortIcon sx={{color:'#fff'}}/>
              <DropDownItem 
                  button
                  text={moviesStore.selectedFilters.order[0]?.name ||  'Сортировка'} /* Здесь должна быть выбранная сортировка */
                  name="order"
                  content={sortTypes}
                  isTransparent={true}
                  isUnderTextNeed={false}
                />
              </Box>

                <FiltersList/>
                <MoviesList movies = {moviesStore.movies} title="Все"/>

                <MyButton text="Показать еще" func={moviesStore.pagination}/> 
            </Container>
        
    )
});

export default Movies;

