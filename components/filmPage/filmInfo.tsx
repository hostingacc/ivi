import { Box, Typography, Stack, Button } from "@mui/material";
import FilmTime from "./filmTime";
import FilmAgeLimit from "./filmAgeLimit";
import ShowMoreText from "../showMoreText";
import MyText from "../content/myText";
import GenresAndCountriesList from "./filmGenresAndCountriesList";
import Image from "next/image";
import FilmLanguageInfo from "./filmLanguageInfo";


interface FilmInfoProps {
    nameRu: string;
    nameEn: string;
    year: number;
    filmLength: string;
    ratingAgeLimits: string;
    genres: string[];
    countries: string[];
    type: string;
    description: string;
    persons:any;
  }

const FilmInfo = ({  
    nameRu,
    nameEn,
    year,
    filmLength,
    ratingAgeLimits,
    genres,
    countries,
    type,
    persons,
    description}:FilmInfoProps) => {

      
    return(
        <Box sx={{color:'#fff', width:'439px', ml:'auto', height:'800px'}}>
        <Typography sx={{textAlign:'center', fontWeight:600}} variant="h2">{nameRu}</Typography>
        <Stack direction="row" sx={{ justifyContent: "center" }} spacing={1}>
          <MyText text={year} align={'center'} color="rgba(255,255,255,.72)"/>
          <FilmTime minutes={+filmLength} />
          <FilmAgeLimit text={ratingAgeLimits} />
        </Stack>
        <GenresAndCountriesList genres={genres} countries={countries}/>
        <FilmLanguageInfo/>
        <Stack direction="row" sx={{ justifyContent: "center" ,mt:'2rem'}} spacing={2}>
        {persons?.filter((e:any) => e.roles.some((el:any) => el.nameRu.includes('Актеры'))).slice(0, 4).map((e:any)=>{
        return(
          <Box key={e.id} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Box sx={{
                width:'56px',
                height:'56px',
                borderRadius:'12px',
                border:'8px solid rgba(255, 255, 255,.16)',
                display:'flex',
                alignItems:'center',
                transition: 'all 0.3s ease-in-out',
                ':hover': {
                  borderColor: 'rgba(255, 255, 255,.36)',
                },
              }}>
              <Image 
              width={44}
              height={44}
              alt="фото актера"
              src={e.posterUrl}
              className="borderRadiusImage"
              >
                </Image>
              </Box>
              <Box sx={{width:'77px'}}>
                <MyText  text={e.nameRu} align="center"/>
              </Box>
          </Box>
         
        )
            
        })}
        </Stack>
        
        <Box sx={{mt:'2rem'}}>
          <ShowMoreText text={description} length={150} buttonText={'Детали о фильме'}/>
        </Box>
      </Box>
    )
}
export default FilmInfo;