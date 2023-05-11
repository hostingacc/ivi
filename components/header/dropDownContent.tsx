import useRequest from "@/hooks/useRequest";
import { Box, Stack } from "@mui/material";
import MyLink from "../navigation/myLink";
import MyList from "../content/myList";
import Hr from "../hr";
import DropdownSlider from "../navbar/DropdownSlider";
import DropdownSliderToRight from "../navbar/DropdownSliderToRight";
import UserDropdown from "../navbar/UserDropdown";


const DropDownContent = () => {
    const url = 'http://localhost:3001/movies/filters/genres';

    const genres:any = useRequest(url);

    const content = genres?.map((e: any) => ({
        link: `/movies/${e.nameRu}`,
        content: e.nameRu,
        
      }));

    
    return(
        <Box>
            <Hr/>
            <Stack direction='row' sx={{mt:'1rem'}}>
                <Box>
                 <MyList title="Жанры" content={content} />
         
                </Box>
            </Stack>
        </Box> 
    )
}

export default DropDownContent;