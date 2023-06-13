import { Box, List, ListItem } from "@mui/material";
import MyTitle from "./myTitle";
import MyLink from "../controls/navigation/myLink";
import MyButton from "../controls/buttons/myButton";
import CheckIcon from "@mui/icons-material/Check";
import { observer } from "mobx-react-lite";
import { rootStore } from "@/store/RootStore";
import { toJS } from "mobx";

interface MyListProps {
  content: any;
  title?: string | undefined | null;
  itemsPerColumn?: number;
  isButton?: boolean;
  type?: string;
  inputText?: string;
  store?: any;
}

const MyList = observer(
  ({
    title,
    content,
    itemsPerColumn = 11,
    isButton,
    type,
    inputText,
    store,
  }: MyListProps) => {
    const splitContent = (data) => {
      if (data?.length > 24) {
        itemsPerColumn = 17;
      }
      if (data?.length > 51) {
        itemsPerColumn = 30;
      }
      if (!data || data.length <= itemsPerColumn) {
        return [data];
      } else {
        const firstColumnContent = data.slice(0, itemsPerColumn);
        const restOfContent = data.slice(itemsPerColumn);
        return [firstColumnContent, ...splitContent(restOfContent)];
      }
    };

    const columns = splitContent(content);


    return (
      <>
        {title && <MyTitle text={title} size="0.9375rem" />}

        <Box style={{ display: "flex" }}>
          {columns?.map((columnContent, index) => (
            <List
              key={index}
              sx={{
                paddingTop: 1,
                marginRight: index === columns.length - 1 ? 0 : "1rem",
              }}
            >
              {columnContent?.map((item) => (
                <ListItem
                  key={item.content}
                  sx={{ paddingLeft: "0", paddingTop: "0.3rem" }}
                >
                  {isButton ? (
                    <MyButton
                      endIcon={<CheckIcon />}
                      color={"transparent"}
                      fontColor="rgba(217,215,224, 0.49)"
                      inputText={inputText}
                      text={item.content}
                      justifyContent="space-between"
                      width="14rem"
                      showEndIcon={
                        type
                          ? store.selectedFilters[type].some(
                              (filter) => filter.name === item.content
                            )
                          : false
                      } /*   вызывает cannot update while rendering но только у input */
                      func={() =>
                        rootStore.moviesStore.handleButtonClick(
                          item.content,
                          item.id,
                          type
                        )
                      }
                    />
                  ) : (
                    <MyLink
                      link={item.link}
                      content={item.content}
                      fontSize="0.9375rem"
                      fontWeight={400}
                    />
                  )}
                </ListItem>
              ))}
            </List>
          ))}
        </Box>
      </>
    );
  }
);

export default MyList;
