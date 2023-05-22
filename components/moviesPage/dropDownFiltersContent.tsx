import { Box } from "@mui/material";
import MyButton from "../buttons/myButton";
import { moviesStore } from "@/store/moviesStore";
import { toJS } from "mobx";

const DropDownFiltersContent = ({content, type}) => {

    return(
      <Box>
          {content?.map((e) => {
          return (
            <MyButton
              key={e.id}
              text={e.nameRu}
              func={() => moviesStore.handleButtonClick(e.nameRu, e.id, type)}
            />
          );
        })}
      </Box>

    )
}


export default DropDownFiltersContent;