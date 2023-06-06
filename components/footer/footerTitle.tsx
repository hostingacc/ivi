import { Typography } from "@mui/material";

interface FooterTitleProps {
  text: string;
}

const FooterTitle = ({ text }: FooterTitleProps) => {
  return (
    <Typography
      variant="h5"
      sx={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}
    >
      {text}
    </Typography>
  );
};

export default FooterTitle;
