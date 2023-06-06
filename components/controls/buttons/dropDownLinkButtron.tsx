import { Button } from "@mui/material";
import MyText from "../../content/myText";

interface DropDownLinkButtonProps {
  text: string;
  func: () => void;
}

const DropDownLinkButton = ({ text, func }: DropDownLinkButtonProps) => {
  return (
    <Button
      onClick={func}
      sx={{
        textTransform: "capitalize",
      }}
    >
      <MyText text={text} />
    </Button>
  );
};

export default DropDownLinkButton;
