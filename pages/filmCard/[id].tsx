import CommentsList from "@/components/comments/commentsList";
import FilmInfo from "@/components/filmInfo";
import FilmTrailer from "@/components/filmTrailer";
import useRequest from "@/components/useRequest";
import Image from "next/image";
import { Container } from "@mui/material";


export interface FilmProps {
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


const FilmCard = () => {
   
    const id = 3;
   
    const url = 'http://localhost:3001/movies/'+ id

    const videoUrl = url + '/videos'

    const film = useRequest(url);

    const video = useRequest(videoUrl);
    
    const commentsUrl =  'http://localhost:3004/comments/' + id  + '/flat';

    const comments = useRequest(commentsUrl);

    console.log(film)

    return(
      <Container maxWidth={false} sx={{ width: '1240px',
    }}>

     
        <>
      {film && (
        <>
   
        <FilmInfo
          nameRu={film.nameRu}
          nameEn={film.nameEn}
          year={film.year}
          filmLength={film.filmLength}
          ratingAgeLimits={film.ratingAgeLimits}
          genres={film.genres}
          countries={film.countries}
          type={film.type}
          description={film.description}
        />
        <CommentsList comments={comments}/>
        </>
      )}
    </>
    </Container>
    )
}

export default FilmCard;

