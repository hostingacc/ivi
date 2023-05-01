import React from 'react';
import { Typography } from '@mui/material';
import { TextProps } from '../interfaces/textProps';

interface MyTextProps extends TextProps{
  text: string | number | null;
}

const MyText = ({ text, align, color = 'rgba(255,255,255,.48)', weight = 400, size = 15, line = '20px' }: MyTextProps) => {

  return (
    <Typography
      align={align}
      sx={{
        color,
        fontWeight: weight,
        fontSize: size,
        lineHeight: line,
        fontStyle: 'normal',
    }}
  >
    {text}
  </Typography>
  );
};

export default MyText;