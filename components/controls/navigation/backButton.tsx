import { Button } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface backButtonProps {
  func?: () => void;
}

const BackButton = ({ func }: backButtonProps) => {
  const router = useRouter();

  return (
    <Button
      onClick={func ? () => func() : () => router.back()}
      sx={{
        backgroundColor: "transparent",
        color: "#fff",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "transparent",
          "& .MuiSvgIcon-root": {
            transform: "scale(1.1)",
          },
        },
        "@media (max-width: 876px)": { fontSize: "2rem" },
      }}
    >
      <ArrowBackIosIcon
        sx={{ "@media (max-width: 876px)": { fontSize: "2.25rem" } }}
      />
      Назад
    </Button>
  );
};

export default BackButton;
