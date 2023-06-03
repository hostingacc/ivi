import { Button, Link } from '@mui/material';
import { ReactElement } from "react";
import React from 'react';


interface smallButtonProps{
    icon: ReactElement | (()=>string);
    isCircle?:boolean;
    backgroundColor?:string;
    hover?:string;
    width?:string;
}


const SmallButton = ({icon, isCircle, backgroundColor = '#1f1b2e', hover = '#3e3659', width = '2.5rem'}:smallButtonProps) => {


    return(
        <Button variant="contained"
                    sx={{
                        backgroundColor,
                        borderColor: backgroundColor,
                        borderWidth: '1px',
                        boxShadow: backgroundColor === 'transparent' ? 0 : undefined,
                        borderRadius: isCircle ? "50%" : "8px",
                        height:'2.5rem',
                        width,
                        minWidth:'2.5rem',
                        padding:0,
                        '&:hover': {
                            backgroundColor: hover,
                            borderColor: hover,
                        },
                        '@media (max-width:876px)': {
                            width:'4.4rem',
                         },
                       
                    }}>
            <Link href="#"  sx={{ display: "flex", alignItems: "center" }}>
                    {React.isValidElement(icon) ? (
                icon
            ) : typeof icon === 'function' ? (
                icon()
            ) : null}
            </Link>
        </Button> 
    )
}

export default SmallButton;