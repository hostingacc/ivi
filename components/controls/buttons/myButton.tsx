import { Button, Box, Typography } from "@mui/material";
import { ReactElement, cloneElement, useState } from "react";
import MyText from "../../content/myText";

interface ButtonProps {
  color?: string;
  hoverColor?: string;
  text: string;
  smallText?: string;
  icon?: ReactElement;
  func?: any;

  width?: string;
  height?: string;
  size?: string;
  id?: string;
  fontColor?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  showEndIcon?: boolean;
  inputText?: string;
  mobileWidth?: string;
  justifyContent?: string;
  border?: string;
}

const MyButton = ({
  id,
  color = "#1f1b2e",
  hoverColor = color,
  fontColor = "#fff",
  text,
  smallText,
  size = "15px",
  icon,
  func,
  width = "196px",
  height = "40px",
  startIcon,
  endIcon,
  showEndIcon,
  inputText,
  mobileWidth,
  justifyContent = "center",
  border = "none",
}: ButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
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
        textTransform: "none",
        border,
        backgroundColor: color,
        borderColor: border,
        borderWidth: color === "transparent" && border === "none" ? 0 : "1px",
        borderRadius: "8px",
        height,
        width,
        boxShadow: color === "transparent" ? 0 : undefined,
        paddingLeft: icon ? "1rem" : 0,
        paddingRight: icon ? "1rem" : 0,
        display: "flex",
        justifyContent,
        
        "&:hover": {
          backgroundColor: hoverColor,
          borderColor: hoverColor,

          border:
            border !== "none"
              ? "1px solid rgba(255,255,255,0.93) !important"
              : "unset",
        },
      }}
    >
      {icon}
      <Box
        id={id}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          
        }}
      >
        {smallText && (
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,.72)",
              fontSize: "0.625rem",
              marginBottom: "-0.2rem",
            }}
          >
            {smallText}
          </Typography>
        )}
        <MyText
          id={id}
          text={text}
          inputText={inputText}
          color={fontColor}
          size={size}
          hover={"#fff"}
        />
      </Box>
    </Button>
  );
};

export default MyButton;
