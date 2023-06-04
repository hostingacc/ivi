import { Breadcrumbs } from '@mui/material';
import React from 'react';
import MyLink from './myLink';
import { capitalizeFirstLetter } from '@/functions/capitalizeFirstLetter';
import MyText from '../content/myText';
import { useState, useEffect } from 'react';

const MyBreadcrumbs = ({ links, separator = '·' }) => {

  const genreIndex = links.findIndex(link => link.href === '');
  const genreBreadcrumbs = links.slice(genreIndex);
  const otherLinks = links.slice(0, genreIndex);

/* 
  const [hydrate, setHydrate] = useState(false)

  useEffect(()=>{
    setHydrate(true);
  },[])

  if(!hydrate){
    return null;
  } */

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={separator}
      sx={{
        '& .MuiLink-root': {
          color: 'rgba(255,255,255,.72)',
          '&:hover': {
            color: '#fff',
          },
        },
        '& .MuiTypography-root': {
          color: 'rgba(255,255,255,.72)',
        },
        '& .MuiBreadcrumbs-separator': {
          color: 'rgba(255,255,255,.72)',
        },
      }}
    >
      {otherLinks.map((link, i) => {
        return link.href ? (
          <MyLink
            key={i}
            fontWeight={500}
            link={link.href}
            content={capitalizeFirstLetter(link.text)}
            fontSize={'16px'}
          />
        ) : (
          <MyText
            key={i}
            weight={500}
            size={'16px'}
            text={capitalizeFirstLetter(link.text)}
          />
        );
      })}

      <MyText
        weight={500}
        size={'16px'}
        text={genreBreadcrumbs
          .map(genre => capitalizeFirstLetter(genre.text))
          .join(', ')}
      />
    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;
