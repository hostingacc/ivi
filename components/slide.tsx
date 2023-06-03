import Image from "next/image";
import { Box } from "@mui/material";
import MyLink from "./navigation/myLink";
import MyButton from "./buttons/myButton";

const Slide = ({slide, id}) => {


    return(
        <Box id={id}>
        <Image
            src={slide}
            alt='Slider'
            width={1190}
            height={370}
            style={{
                borderRadius: "20px",
            }}
        />
{/*        <Box sx={{
            position:'absolute',
            bottom:'1.25rem',
            left:'6.25rem'
        }}>
            <MyLink 
                link='/movies'
                content={
                    <MyButton text='Смотреть бесплатно' color='#ea003d'/>
                }/>
        </Box>  */}
    
    </Box>

    )
}

export default Slide;