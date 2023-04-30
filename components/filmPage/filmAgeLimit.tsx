import React from 'react';
import MyText from '../content/myText';

interface FilmAgeLimitProps {
  text: string;
}

const FilmAgeLimit = ({ text }:FilmAgeLimitProps) => {

  const numberOnly = text.replace(/\D/g, '');

  return(
    <MyText text={`${numberOnly} +`} align='center' color="rgba(255,255,255,.72)"/>
  ) 
};

export default FilmAgeLimit;