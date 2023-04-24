import { Button } from '@mui/material';
import { useState } from 'react';
import MyText from './content/myText';

interface ShowMoreTextProps {
  text: string;
  length: number;
  buttonText: string;
  useDangerouslySetInnerHTML?: boolean;
}

const ShowMoreText = ({
  text,
  length,
  buttonText,
  useDangerouslySetInnerHTML = false,
}: ShowMoreTextProps) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowMore = () => {
    setShowFullText(true);
  };

  const displayText = showFullText
    ? text
    : text.length > length
    ? `${text.slice(0, length)}...`
    : text;

  return (
    <>
      {useDangerouslySetInnerHTML ? (
        <div dangerouslySetInnerHTML={{ __html: displayText }}  style={{ color: 'rgba(255,255,255,.98)', textAlign: 'left' }}/>
      ) : (
        <MyText text={displayText} align={'left'} />
      )}
      {!showFullText && <Button onClick={handleShowMore}>{buttonText}</Button>}
    </>
  );
};

export default ShowMoreText;