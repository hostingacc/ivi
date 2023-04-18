import React from 'react';
import { Typography } from '@mui/material';

interface MyTextProps {
  text: string;
  align: 'left' | 'center' | 'right';
  color?: string;
}

const MyText = ({ text, align, color }: MyTextProps) => {

  if (!color){
    color = 'rgba(255,255,255,.48)'
  } 
  return (
    <Typography
    align={align}
    sx={{
      color,
      fontWeight: 400,
      fontSize: 15,
      lineHeight: '20px',
      fontStyle: 'normal',
    }}
  >
    {text}
  </Typography>
  );
};

export default MyText;