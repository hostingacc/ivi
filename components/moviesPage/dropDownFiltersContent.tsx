import { Box } from "@mui/material";
import MyList from "../content/myList";

interface DropDownFiltersContentProps{
  content:any;
  type:string;
  inputText?:string;
  store?:any
}

const DropDownFiltersContent = ({content, type, inputText, store}:DropDownFiltersContentProps) => {

  const generateContent = () => {
    return store?.[type]?.map((e) => ({
    link: `/movies/${e.nameRu}`,
    content: e.nameRu,
    id:e.id,
    type:type
    }));
  }
  console.log(type)

    const listContent = generateContent();

      return(
        <Box>
              <MyList content={listContent} itemsPerColumn={8} isButton={true} type={type} inputText={inputText} store={store}/>
        </Box>
  
      )
}



export default DropDownFiltersContent;