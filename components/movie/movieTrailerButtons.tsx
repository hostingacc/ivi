import MyButton from "../buttons/myButton";
import { Stack } from "@mui/material";
import SmallButton from "../buttons/smallButton";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IosShareIcon from '@mui/icons-material/IosShare';


interface MovieTrailerButtons{
    openModal: () => void;
}

const MovieTrailerButtons = ({openModal}) => {


    return(
        <Stack direction='row' gap={1} 
        sx={{
            mt:'1rem',
            '@media (max-width:1159px)': {
                flexWrap:'wrap',
                width:'15.40rem',
                ml:'auto',
                justifyContent:'space-between'
             },
        }}>
            <MyButton 
                text={'Трейлер'}
                icon={<PlayArrowOutlinedIcon/>}
                func={openModal}
                color={'rgba(255,255,255,.08)'}
                hoverColor={'rgba(255,255,255,.18)'}/>
            <SmallButton backgroundColor="rgba(255,255,255,.08)" hover='rgba(255,255,255,.18)' icon={<BookmarkBorderIcon sx={{color:"#fff"}}/>}/>
            <SmallButton backgroundColor="rgba(255,255,255,.08)" hover='rgba(255,255,255,.18)' icon={<NotificationsNoneIcon sx={{color:"#fff"}}/>}/>
            <SmallButton backgroundColor="rgba(255,255,255,.08)" hover='rgba(255,255,255,.18)' icon={<IosShareIcon sx={{color:"#fff"}}/>}/>
        </Stack>
    )
}

export default MovieTrailerButtons;