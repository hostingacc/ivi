import React from 'react';
import { Typography } from '@mui/material';

interface FormattedRatingProps {
  rating: number;
  smallDecimal?: boolean;
}

const FormattedRating = ({ rating, smallDecimal }: FormattedRatingProps) => {
  let [whole, decimal] = rating.toString().split('.');
  return (
    <Typography>
      {whole}
      {decimal && (
        <>
          ,
          {smallDecimal ? (
            <span style={{ fontSize: '0.75em' }}>{decimal}</span>
          ) : (
            decimal
          )}
        </>
      )}
    </Typography>
  );
};

export default FormattedRating;