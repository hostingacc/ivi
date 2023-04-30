import { Typography } from '@mui/material';
import MyText from '../content/myText';


interface FilmTimeProps {
  minutes: number;
}

const FilmTime = ({ minutes }:FilmTimeProps) => {

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return (
    <MyText text={`${hours} ч. ${remainingMinutes} мин.`} align={'center'} color="rgba(255,255,255,.72)"/>
  );
};

export default FilmTime;