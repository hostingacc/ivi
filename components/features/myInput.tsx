import {TextField} from "@mui/material";

interface MyInputProps{
    label:string;
    setState: (value:string) => void;
}

const MyInput = ({label, setState}:MyInputProps) => {

    return(
        <TextField
        onChange={(e) => setState(e.target.value)}
        sx={{
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'yellow',
            },
            },
            '& label': {
            color: 'white',
            },
            '& label.Mui-focused': {
            color: 'yellow',
            },
            '& input::placeholder': {
            color: 'white',
            },
            '& input': {
            color: 'white',
            },
        }}
        label={label}
        />
    )
}

export default MyInput;