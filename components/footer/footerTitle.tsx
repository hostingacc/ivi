import { Typography } from '@mui/material';


interface FooterTitleProps{
    text: string;
}

const FooterTitle = ({text}:FooterTitleProps) => {

    return(
            <Typography variant="h5">{text}</Typography>
    )
}

export default FooterTitle;