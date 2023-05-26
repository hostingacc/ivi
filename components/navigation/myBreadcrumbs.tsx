import { Breadcrumbs} from '@mui/material';
import React from 'react';
import MyLink from './myLink';
import { capitalizeFirstLetter } from '@/functions/capitalizeFirstLetter';
import MyText from '../content/myText';


const MyBreadcrumbs = ({ links, separator = '·' }) => {
  // Find the index of the first genreBreadcrumb in the links array
  const genreIndex = links.findIndex(link => link.href === '');

  // Extract the genreBreadcrumbs from the links array
  const genreBreadcrumbs = links.slice(genreIndex);

  // Remove the genreBreadcrumbs from the links array
  const otherLinks = links.slice(0, genreIndex);

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
          />
        ) : (
          <MyText
            key={i}
            weight={500}
            size={'1rem'}
            text={capitalizeFirstLetter(link.text)}
          />
        );
      })}

      {/* Render the genreBreadcrumbs as a single element */}
      <MyText
        weight={500}
        size={'1rem'}
        text={genreBreadcrumbs
          .map(genre => capitalizeFirstLetter(genre.text))
          .join(', ')}
      />
    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;
