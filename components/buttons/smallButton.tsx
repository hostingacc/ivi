import { Button, Link } from '@mui/material';
import Image from 'next/image';
import { ReactElement } from "react";
import React from 'react';


interface smallButtonProps{
    icon: ReactElement | (()=>string);
    isCircle?:boolean;
}


const SmallButton = ({icon, isCircle}:smallButtonProps) => {


    return(
        <Button variant="contained"
                    sx={{
                        backgroundColor: '#1f1b2e',
                        borderColor: '#1f1b2e',
                        borderWidth: '1px',
                        borderRadius: isCircle ? "50%" : "8px",
                        height:'40px',
                        width:'40px',
                        minWidth:'40px',
                        padding:0,
                        '&:hover': {
                            backgroundColor: '#3e3659',
                            borderColor: '#3e3659',
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