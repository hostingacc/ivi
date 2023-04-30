import { useState } from "react";
import { Box } from "@mui/material";

const CommentsLine = ({content, onClick}:any) => {
    const [isHovered, setIsHovered] = useState(false);


    const makeWhiteColor = (e:any) => {
        e.stopPropagation();
        setIsHovered(true);
    }
    const removeWhiteColor = (e:any) => {
        e.stopPropagation();
        setIsHovered(false);
    }
 
    return(
        <Box
            onMouseEnter={(e) => makeWhiteColor(e)}
            onMouseLeave={(e) => removeWhiteColor(e)}
            sx={{
                borderLeft: 1,
                borderColor: isHovered? 'white' : 'rgba(128,128,128,0.2)',
                marginLeft: 2,
                paddingLeft: 2,

            }}
            onClick={(e)=> onClick(e)}
    >
        {content}
    </Box>
    )
}

export default CommentsLine;