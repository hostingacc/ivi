import CommentsList from "@/components/comments/commentsList";
import FilmInfo from "@/components/filmPage/filmInfo";
import FilmTrailer from "@/components/filmPage/filmTrailer";
import useRequest from "@/hooks/useRequest";
import Image from "next/image";
import { Container } from "@mui/material";
import { useRouter } from "next/router";


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
   
    const router = useRouter()
    const { id } = router.query;
  
    const url = id ? 'http://localhost:3001/movies/' + id : undefined;
    const videoUrl = id ? url + '/videos' : undefined;
    const commentsUrl = id ? 'http://localhost:3004/comments/' + id + '/flat' : undefined;
  
    const film = useRequest(url)
    const video = useRequest(videoUrl)
    const comments = useRequest(commentsUrl)


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

