import { Box } from "@mui/material";
import MyList from "../../content/myList";
import { useWindowSize } from "@/hooks/useWindowSize";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

interface DropDownFiltersContentProps {
  content: any;
  type: string;
  inputText?: string;
  store?: any;
}

const DropDownFiltersContent = observer(({
  content,
  type,
  inputText,
  store,
}: DropDownFiltersContentProps) => {
  const generateContent = () => {
     return store?.[type]?.map((e) => ({
      link: `/movies/${e.nameRu}`,
      content: e.nameRu,
      id: e.id,
      type: type,
    })); 
   
  };
  const size = useWindowSize();

  let itemsPerColumn;


  let width;
  if (size.width) {
    if (size.width <= 320) {
      itemsPerColumn = 100;

      width = "100%";
    } else if (size.width <= 507) {
      itemsPerColumn = 100;
    }
  }

  const listContent = generateContent();

  return (
    <Box sx={{ height: "100%" }}>
      <MyList
        content={listContent}
        itemsPerColumn={itemsPerColumn}
        isButton={true}
        type={type}
        inputText={inputText}
        store={store}
      />
    </Box>
  );
});

export default DropDownFiltersContent;
