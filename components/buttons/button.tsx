import { Button, Box, Typography } from '@mui/material';
import { ReactElement } from "react";

interface ButtonProps{
    text:string;
    smallText?:string;
    icon?: ReactElement;
    onClick?:()=> void;
}


const MyButton = ({text, smallText, icon, onClick}:ButtonProps) => {



    return(
        <Button
            variant="contained"
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#1f1b2e',
                        borderColor: '#1f1b2e',
                        borderWidth: '1px',
                        borderRadius: '0.5rem',
                        height:'40px',
                        width: icon ? undefined : '196px',
                        paddingLeft: icon ? '1rem' : 0,
                        paddingRight: icon ? '1rem' : 0,
                    '&:hover': {
                        backgroundColor: '#3e3659',
                        borderColor: '#3e3659',
                    
                    },
                    }}>
                       {icon}
                       <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginLeft:'3px'
                        }}>
                        {smallText && (
                        <Typography
                            variant="caption"
                            sx={{
                            color: 'rgba(255,255,255,.72)',
                            fontSize: '10px',
                            marginBottom: '-0.2rem',
                            }}
                        >
                            {smallText}
                        </Typography>
                        )}
                    <Typography variant="body1" >{text}</Typography>
            </Box>
        </Button>
    )
}

export default MyButton;