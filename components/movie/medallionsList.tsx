import { Stack, Box } from "@mui/material";
import Medallion from "../content/medallion";
import { Person } from "../interfaces/persons";
import MyText from "../content/myText";
import Link from "next/link";

interface MedallionListProps{
    persons: Person[],
    rating: number
}

const MedallionList = ({persons, rating}:MedallionListProps) => {

    return(
        <Stack direction="row" sx={{ justifyContent: "center" ,mt:'2rem'}} spacing={2}>
        <Box sx={{height:'56px', width:'56px'}}>
          <Medallion rating={rating}/>
        </Box>
      
      {persons?.filter((e) => e.roles.some((el) => el.nameRu.includes('Актеры'))).slice(0, 4).map((e)=>{
        return(
          <Link 
            key={e.id}
            style={{ display:'flex',
            flexDirection:'column',
            alignItems:'center',}}
            href={`/personPage/${e.id}`}>
              <Box sx={{height:'56px', width:'56px'}}>
                  <Medallion image={e.posterUrl}/>
              </Box>
              <Box sx={{width:'77px'}}>
                <MyText  text={e.nameRu} align="center"/>
              </Box>
          </Link>
        )})}
      </Stack>
    )
}

export default MedallionList;