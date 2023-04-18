import { Typography, Box } from "@mui/material";
import avatar from '../../public/temporaryFiles/ava.jpg'
import Image from "next/image";
import MyText from "../content/myText";
import Time from "../content/time";

interface CommentInfoProps{
    name:string;
    time:string;
    id:number;
}

const CommentInfo = ({name,time,id}:CommentInfoProps) => {

    //id нужен для того, чтобы сделать ссылку

    return(
        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height:'4.5rem',
      }}
    >
      <Box sx={{height:'100%'}}>
        <Image src={avatar} alt="ававтар автора комментария" />
      </Box>

      <Box sx={{ml:'0.4rem', backgroundColor:'#1f1b2e', height:'100%', width:'100%', p:'0.4rem'}}>
        {/* name это либо text, либо link, будет зависеть от данных */}
        <MyText text={name} align="left" color="#fff"/>
        <Time time={time}/>
      </Box>
    </Box>
    )
}

export default CommentInfo;

