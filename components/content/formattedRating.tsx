import React from "react";
import { Typography } from "@mui/material";

interface FormattedRatingProps {
  rating: number | undefined;
  smallDecimal?: boolean;
  color?: string;
  fontWeight?: number;
  fontSize?: string;
}

const FormattedRating = ({
  rating,
  smallDecimal,
  color = "#000",
  fontWeight = 500,
  fontSize = "1rem",
}: FormattedRatingProps) => {
  if (rating === undefined || rating === null) {
    return null;
  }

  let [whole, decimal] = rating.toString().split(".");
  return (
    <Typography sx={{ color, fontSize, fontWeight }}>
      {whole}
      {decimal && (
        <>
          ,
          {smallDecimal ? (
            <span style={{ fontSize: "0.75em" }}>{decimal}</span>
          ) : (
            decimal
          )}
        </>
      )}
    </Typography>
  );
};

export default FormattedRating;
