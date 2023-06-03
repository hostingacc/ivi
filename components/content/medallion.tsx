import { Box } from "@mui/material";
import Image from "next/image";
import FormattedRating from "./formattedRating";
import Link from "next/link";


interface MedallionProps{
    image?:string;

    rating?:number | undefined;
    transparentBorder?: boolean;
    fontSize?:string;
    fontWeight?:number;
}

const Medallion = ({image, rating, transparentBorder = false, fontSize = '1rem', fontWeight}:MedallionProps) => {


  let backgroundColor;

  if(rating){
    if (rating > 7) {
      backgroundColor = '#73a32f';
    } else if (rating > 5) {
      backgroundColor = 'grey';
    } else {
      backgroundColor = 'red';
    }
  }

  

    const Content = () => {
        if(image){

            return(
      
                <Box sx={{width:'56px', height:'40px', position:'relative'}}>
                <Image 
                  fill
                  alt="фото актера"
                  src={image}
                  className="borderRadiusImage"
                  >
                </Image>
              </Box>
      
  

            )
        }
        return(
            <Box sx={{
                backgroundColor,
                width:'100%',
                height:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:'6px'
            }}>
                <FormattedRating rating={rating} color="#fff" fontSize={fontSize} fontWeight={fontWeight}/>
            </Box>
        )
    }


    return(
        <Box sx={{
            width:'100%',
            height:'100%',
            borderRadius:'12px',
            border: transparentBorder? '8px solid transparent' :  '8px solid rgba(255,255,255,.08)',
            display:'flex',
            alignItems:'center',
            transition: 'all 0.3s ease-in-out',

          }}>
            <Content/>
          </Box>
    )
}

export default Medallion;