import { Link } from '@mui/material';

interface FooterItemProps{
    link:string;
    text:string;
    gradient?:boolean;
}


const MyLink = ({link, text, gradient}:FooterItemProps) => {

    return(
            <Link href={link} sx={
                gradient
                    ? {
                    backgroundImage: 'linear-gradient(-45deg,#c447ff,#ea003d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration:'none',
                    }
                    : {
                    color: 'rgba(255,255,255,.48)',
                    transition: 'color 0.3s',
                    textDecoration:'none',
                    '&:hover': {
                        color:'#fff'
                    },
                    }}
                    >
                    {text}
            </Link>
            
    )
}

export default MyLink;