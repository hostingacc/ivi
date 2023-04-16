import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';

interface FooterItemProps{
    link:string;
    text:string;
    fontSize:string;
    fontWeight:number;
    gradient?:boolean;
}


const MyLink = ({link, text, gradient, fontSize, fontWeight}:FooterItemProps) => {

    const isInternal = link.startsWith('/');
    const LinkComponent = isInternal ? NextLink : MuiLink;

    return (
        <LinkComponent href={link} sx={
          gradient
            ? {
              backgroundImage: 'linear-gradient(-45deg,#c447ff,#ea003d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              fontSize,
              fontWeight,
              
            }
            : {
              color: 'rgba(255,255,255,.48)',
              transition: 'color 0.3s',
              textDecoration: 'none',
              fontSize,
              fontWeight,
              '&:hover': {
                color: '#fff'
              },
            }}
        >
          {text}
        </LinkComponent>
      )
}

export default MyLink;