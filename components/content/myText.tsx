import React from "react";
import { Typography } from "@mui/material";
import { TextProps } from "../../interfaces/textProps";
import { highlightText } from "../../functions/highlightText";

interface MyTextProps extends TextProps {
  text: any;
  id?: string;
  hover?: string;
  inputText?: string;
}

const MyText = ({
  id,
  text,
  align,
  color = "rgba(255,255,255,.48)",
  weight = 400,
  size = "0.91rem",
  line = "1.25rem",
  hover = "none",
  inputText,
}: MyTextProps) => {
  const {
    beforeMatch = "",
    match = "",
    afterMatch = "",
    hasMatch = false,
  } = inputText ? highlightText(text.toString(), inputText) : {};

  return (
    <Typography
      id={id}
      align={align}
      sx={{
        color,
        fontWeight: weight,
        fontSize: size,
        lineHeight: line,
        fontStyle: "normal",
        "&:hover": {
          color: hover,
        },
      }}
    >
      {inputText ? (
        <>
          {beforeMatch}
          <span style={{ color: "#fff" }}>{match}</span>
          {afterMatch}
        </>
      ) : (
        text
      )}
    </Typography>
  );
};

export default MyText;
