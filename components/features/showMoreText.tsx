import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import MyText from '../content/myText';
import { cutText } from '../../functions/cutText';
import MyButton from '../buttons/myButton';

interface ShowMoreTextProps {
  text: string;
  length: number;
  buttonText?: string;
  color?: string,
  useDangerouslySetInnerHTML?: boolean;
  showCollapseButton?:boolean;
}

const ShowMoreText = ({
  text,
  length,
  buttonText,
  color='rgba(255,255,255,.48)',
  useDangerouslySetInnerHTML = false,
  showCollapseButton = false

}: ShowMoreTextProps) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowMore = () => {
    setShowFullText(true);
  };
  const handleCollapse = () => {
    setShowFullText(false);
  };

  const [isMounted,setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
},[]);


  const displayedText = cutText(text, length ,showFullText);

  return (
    <>
      {useDangerouslySetInnerHTML && isMounted ? (
        <div dangerouslySetInnerHTML={{ __html: displayedText }}  style={{fontSize:'16px', color: 'rgba(255,255,255,.78)', textAlign: 'left',whiteSpace: 'normal'}}/>
      ) : (
        <MyText text={displayedText} align={'left'} color={color} size={'16px'} line='22px'/>
      )}
      <Box sx={{mt:'8px'}}>
      {!showFullText && text?.length > length &&  buttonText &&(
      <MyButton func={handleShowMore} text={buttonText} color={'transparent'} justifyContent={'flex-start'} fontColor={'rgba(255,255,255,0.68)'}  size={'1rem'}/>
      )}
      {showFullText && showCollapseButton && (
        <MyButton
          func={handleCollapse}
          text={"Свернуть"}
          color={"transparent"}
          justifyContent={"flex-start"}
          fontColor={"rgba(255,255,255,0.68)"}
          size={'1rem'}
        />
      )}
      </Box>
    </>
  );
};

export default ShowMoreText;