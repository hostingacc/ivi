import React from 'react';
import { Typography } from '@mui/material';

interface MyTextProps {
  text: string;
  align: 'left' | 'center' | 'right';
}

const MyText = ({ text, align }: MyTextProps) => {
  return (
    <Typography
    align={align}
    sx={{
      color: 'rgba(255,255,255,.48)',
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