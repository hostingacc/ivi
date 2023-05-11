import FilmList from "@/components/filmList";
import { Box, Container } from "@mui/material";

import FiltersList from "@/components/moviesPage/filtersList";
import { useEffect} from "react";

import { observer } from "mobx-react-lite";
import { moviesStore } from "@/store/moviesStore";
import { useRouter } from "next/router";

import { toJS } from 'mobx';
import MyButton from "@/components/buttons/myButton";




const Movies = observer(() => {
    
  const router = useRouter();
  const genreName  = router.query;

/*   console.log(genreName.slug) */
  
useEffect(() => {
  if (genreName.slug) {
    const genre = moviesStore.genres.find(
      (genre: any) => genre.nameRu === genreName.slug?.toString()
    );

    if (genre) {
      const isSelected = moviesStore.selectedFilters.genres.some(
        (filter:any) => filter.id === genre.id
      );
      if (!isSelected) {
        moviesStore.resetFilters();
        moviesStore.handleButtonClick(genre.nameRu, genre.id, "genres");
      }
    }
  }
  console.log(toJS(moviesStore.selectedFilters));
}, [genreName]);




    return(
        <Box>
            <Container maxWidth={false} sx={{ width: '1240px', mb:'1rem' }}>
                <FiltersList/>
                <FilmList films = {moviesStore.films}/> 
            </Container>
        </Box>
    )
});

export default Movies;