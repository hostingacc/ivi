import { Button, Box, Typography } from '@mui/material';
import { ReactElement, cloneElement, useState } from "react";
import MyText from '../content/myText';


interface ButtonProps{
    color?: string;
    hoverColor?: string;
    text: string;
    smallText?: string;
    icon?: ReactElement;
    func?: ()=>void;
    width?: string;
    size?: string;
    id?: string;
    fontColor?: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    showEndIcon?:boolean;
    inputText?:string;
}


const MyButton = ({id ,color = '#1f1b2e', hoverColor = color, fontColor='#fff', text, smallText, size = '0.93rem', icon, func, width = '12.25rem', startIcon, endIcon, showEndIcon, inputText}:ButtonProps) => {

    const [hover, setHover] = useState(false);
    
    return(
        <Button
            startIcon={startIcon}
            endIcon={
                showEndIcon
                  ? endIcon
                  : hover && endIcon
                  ? cloneElement(endIcon, {
                      style: { color: "grey" },
                    })
                  : null
              }
            id={id}
            onClick={func}
            variant="contained"
            disableRipple
            disableTouchRipple
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
                    sx={{
                        textTransform: 'none',
                        backgroundColor: color,
                        borderColor: color,
                        borderWidth: color === 'transparent' ? 0 : '1px',
                        borderRadius: '0.5rem',
                        height:'2.5rem',
                        width,
                        boxShadow: color === 'transparent' ? 0 : undefined,
                        paddingLeft: icon ? '1rem' : 0,
                        paddingRight: icon ? '1rem' : 0,
                        display:'flex',
                        justifyContent: endIcon ? 'space-between' : 'center',
                        '&:hover':  {
                            backgroundColor: hoverColor,
                            borderColor: hoverColor,
                        },
                        '@media (max-width:1159px)': {
                            width:'15.4rem',
                         },
                    }}>
                       {icon}
                       <Box
                            id={id}
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
                            fontSize: '0.625rem',
                            marginBottom: '-0.2rem',
                            }}
                        >
                            {smallText}
                        </Typography>
                        )}
                    <MyText id={id} text={text} inputText={inputText} color={fontColor} size={size} hover={'#fff'}/>
                    </Box>
        </Button> 
    )
}

export default MyButton;