import React from 'react';
import { Typography } from '@mui/material';

interface MyTextProps {
  text: string | number;
  align: 'left' | 'center' | 'right';
  color?: string;
  weight?:number;
}

const MyText = ({ text, align, color, weight }: MyTextProps) => {

  if (!color){
    color = 'rgba(255,255,255,.48)'
  } 
  if (!weight){
    weight = 400
  } 
  return (
    <Typography
      align={align}
      sx={{
        color,
        fontWeight: weight,
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