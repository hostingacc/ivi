import React from 'react';
import MyText from './content/myText';

interface FilmAgeLimitProps {
  text: string;
}

const FilmAgeLimit = ({ text }:FilmAgeLimitProps) => {

  const numberOnly = text.replace(/\D/g, '');

  return(
    <MyText text={`${numberOnly} +`} align='center'/>
  ) 
};

export default FilmAgeLimit;