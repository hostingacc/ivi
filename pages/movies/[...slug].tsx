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

interface Filter {
  id: number;
}

const Movies = observer(() => {
    
  const router = useRouter();
  const urlQueries  = router.query;
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

  }, []);

  useEffect(() => {
    
    if (urlQueries.slug) {
      const genre = moviesStore.genres.find(
        (genre) => genre.nameRu === urlQueries.slug?.toString()
      );
  
      if (genre) {
        const isSelected = moviesStore.selectedFilters.genres.some(
          (filter: Filter) => filter.id === +genre.id
        );
        if (!isSelected) {
          moviesStore.resetFilters();
          moviesStore.handleButtonClick(genre.nameRu, genre.id, "genres");
        }
      }
    }

   
  }, [urlQueries]);

  if (!isHydrated) {
    return null;
  }
  


 /*  console.log(toJS(moviesStore.movies)) */


  const sortTypes = [{nameRu:'По количеству оценок', name:null, id:'1'},{nameRu:'По рейтингу', name:null, id:'2'},{nameRu:'По дате выхода', name:null ,id:'year-ASC'}, {nameRu:'По алфавиту', name:null ,id:'4'}];


    return(
            <Container maxWidth={false} sx={{ width: '77.5rem', mb:'1rem' }}>
              <Box id="sortButton" sx={{position:'relative',zIndex:'3', display:'flex', alignItems:'center'}}>
              <SortIcon sx={{color:'#fff'}}/>
              <DropDownItem 
                  button
                  text={moviesStore.order[0] || 'Сортировка'} /* Здесь должна быть выбранная сортировка */
                  name="order"
                  content={sortTypes}
                  isTransparent={true}
                />
              </Box>

                <FiltersList/>
                <MoviesList movies = {moviesStore.movies} title="Все"/>

                <MyButton text="Показать еще" func={moviesStore.pagination}/> 
            </Container>
        
    )
});

export default Movies;

