import { Box } from "@mui/material";
import MyText from "../content/myText";
import MyButton from "../buttons/myButton";
import Medallion from "../content/medallion";

interface MovieInfoRatingProps{
    rating:number,
    voteCount:number;
}

const MovieInfoRating = ({rating, voteCount}:MovieInfoRatingProps) => {

    return(
        <Box sx={{display:'flex', width:'100%', height:'5.2rem', backgroundColor:'rgba(255,255,255,.08)', alignItems:'center', padding:'0.4rem', mt:'1rem', borderRadius:'12px'}}>
          <Box sx={{ flexGrow: 2, height:'100%'}}>
            <Medallion transparentBorder={true} rating={rating} fontSize={'1.4rem'} fontWeight={700}/>
          </Box>
          <Box sx={{ flexGrow: 3, ml:'1rem'}}>
              <MyText text={'Рейтинг иви'} color="#fff" align="left" weight={500}/>
              <MyText text={'Интересный сюжет'} color="rgba(255,255,255,.72)" align="left" weight={400}/>
              <MyText text={`${voteCount} оценок`} color="rgba(255,255,255,.72)" align="left" size={'0.81rem'} weight={400}/>
          </Box>
          <Box sx={{ flexGrow: 1, }}>
            <MyButton color={'transparent'} text={'Оценить'} width="5.4rem" height="2rem" border="1px solid rgba(255,255,255,0.33) !important"/>
          </Box>
        </Box>
    )
}


export default MovieInfoRating;