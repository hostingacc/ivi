import { Box } from "@mui/material"
import DropdownSlider from "./DropdownSlider";

const DropDownSliderList = () => {

    return(
        <Box>
            <DropdownSlider scrollDirection="scrollLeft"/>
            <DropdownSlider scrollDirection="scrollRight"/>
            <DropdownSlider scrollDirection="scrollLeft"/>
         </Box>
    )
}

export default DropDownSliderList;