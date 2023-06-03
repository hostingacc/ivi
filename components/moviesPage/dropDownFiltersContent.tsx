import { Box } from "@mui/material";
import MyList from "../content/myList";

interface DropDownFiltersContentProps{
  content:any;
  type:string;
  inputText?:string;
}

const DropDownFiltersContent = ({content, type, inputText}:DropDownFiltersContentProps) => {

  const generateContent = () => {
    return content?.map((e) => ({
    link: `/movies/${e.nameRu}`,
    content: e.nameRu,
    id:e.id,
    type:type
    }));
  }

    const genres = generateContent();

      return(
        <Box>
              <MyList content={genres} itemsPerColumn={8} isButton={true} type={type} inputText={inputText} />
        </Box>
  
      )
}



export default DropDownFiltersContent;