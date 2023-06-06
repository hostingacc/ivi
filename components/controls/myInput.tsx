import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface MyInputProps {
  label: string;
  setState: Dispatch<SetStateAction<string>> | undefined;
}

const MyInput = ({ label, setState }: MyInputProps) => {
  return (
    <TextField
      onChange={(e) => (setState ? setState(e.target.value) : undefined)}
      sx={{
        width: "100%",
        height: "40px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#A869F0",
          },
        },
        "& label": {
          color: "white",
          fontSize: "16px",
        },

        "& label.Mui-focused": {
          color: "#A869F0",
        },
        "& input::placeholder": {
          color: "white",
          fontSize: "20px",
        },
        "& input": {
          color: "white",
        },
        "@media (max-width:876px)": {
          width: "100%",
          height: "6rem",
        },
      }}
      label={label}
    />
  );
};

export default MyInput;
