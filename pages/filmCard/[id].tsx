import CommentsList from "@/components/comments/commentsList";
import FilmInfo from "@/components/filmPage/filmInfo";
import FilmTrailer from "@/components/filmPage/filmTrailer";
import useRequest from "@/hooks/useRequest";
import Image from "next/image";
import { Container, Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import FilmPersons from "@/components/filmPage/filmPersons";
import MyBreadcrumbs from "@/components/myBreadcrumbs";
import FilmDevices from "@/components/filmPage/filmDevices";
import { GetServerSideProps } from "next";
import FilmReviews from "@/components/filmPage/filmReviews";


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
    id:number;
    posterUrlPreview:string;
  }
  interface Props{
    film: any;
    comments?: any;
    persons?: any;
  }


const FilmCard = () => {

    const router = useRouter()
    const { id } = router.query;
 
  
    const url = id ? 'http://localhost:3001/movies/' + id : undefined;
    const videoUrl = id ? url + '/videos' : undefined;
    const commentsUrl = id ? 'http://localhost:3004/comments/' + id + '/flat' : undefined;

    const personsUrl = id ? 'http://localhost:3005/persons/' + id : undefined;
  
  
    const film = useRequest(url);
    const video = useRequest(videoUrl);
    const comments = useRequest(commentsUrl);
    const persons = useRequest(personsUrl);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(
      <>
      <Box sx={{
        background: 'linear-gradient(rgb(107, 104, 121) 0%, rgba(107, 104, 121, 0) 70%)',
        height:'20rem',
        width:'100%',
        position:'absolute',
        top:0,
        opacity:'0.4'
        }} >
      </Box>
     
      <Container maxWidth={false} sx={{ width: '1240px',
    }}>
        <MyBreadcrumbs/>
     
        <>
      {film && (
        <>
        <Box sx={{display:'flex', position:"relative"}}>
          <FilmTrailer />
    
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
            persons={persons}
          /> 
        </Box>
       <FilmPersons
            persons={persons}
            nameRu={film.nameRu}
            nameEn={film.nameEn}
            year={film.year}
            countries={film.countries}
            comments={comments}
            id={film.id}
            modalIsOpen={modalIsOpen}
          /> 
          <FilmReviews />
          <FilmDevices 
            nameRu={film.nameRu}
            nameEn={film.nameEn}
            poster={film.posterUrlPreview}

          />
        </>
      )}
    </>
    </Container>
    
    </>
    )
}

export default FilmCard;



