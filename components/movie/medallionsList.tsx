import { Stack, Box } from "@mui/material";
import Medallion from "../content/medallion";
import { Person } from "../interfaces/persons";
import MyText from "../content/myText";

interface MedallionListProps{
    persons: Person[],
    rating: number
}

const MedallionList = ({persons, rating}:MedallionListProps) => {

    return(
        <Stack direction="row" sx={{ justifyContent: "center" ,mt:'2rem'}} spacing={2}>
        <Box sx={{height:'3.5rem', width:'3.5rem'}}>
          <Medallion rating={rating}/>
        </Box>
      
      {persons?.filter((e) => e.roles.some((el) => el.nameRu.includes('Актеры'))).slice(0, 4).map((e)=>{
        return(
          <Box key={e.id} 
            sx={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              }}>
            <Box sx={{height:'3.5rem', width:'3.5rem'}}>
              <Medallion image={e.posterUrl}/>
            </Box>
            <Box sx={{width:'77px'}}>
              <MyText  text={e.nameRu} align="center"/>
            </Box>
          </Box>
        )})}
      </Stack>
    )
}

export default MedallionList;