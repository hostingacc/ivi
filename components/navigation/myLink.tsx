import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';

interface MyLinkProps{
    color?:string;
    link:string;
    content:any;
    fontSize?:string;
    fontWeight?:number;
    gradient?:boolean;
}


const MyLink = ({link, content, gradient, fontSize, fontWeight,color}:MyLinkProps) => {

    const isInternal = link.startsWith('/');
    const LinkComponent = isInternal ? NextLink : MuiLink;

    if (!color){
      color = 'rgba(255,255,255,.48)'
    } 

    return (
      <MuiLink href={link} component={LinkComponent} sx={
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
            color,
            transition: 'color 0.3s',
            textDecoration: 'none',
            fontSize,
            fontWeight,
            '&:hover': {
              color: '#fff'
            },
          }}
      >
        {content}
      </MuiLink>
    )
}

export default MyLink;
