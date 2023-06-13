import { Box } from "@mui/material";
import MyInput from "../../controls/myInput";
import MyText from "../../content/myText";
import DropDown from "../../features/dropDown";
import DropDownFiltersContent from "./dropDownFiltersContent";
import { dropdownStore } from "@/store/DropdownStore";
import DropDownButton from "../../controls/buttons/dropDownButton";

import { observer } from "mobx-react-lite";
import { Filter } from "../../../interfaces/filter";
import { Dispatch, SetStateAction } from "react";
import { rootStore } from "@/store/RootStore";

interface DropDownItemProps {
  id?: string;
  text: string;
  name: string;
  /*   content?: any; */
  inputText?: string;
  setState?: Dispatch<SetStateAction<string>> | undefined;
  isLoading?: boolean;
  input?: boolean;
  button?: boolean;
  height?: string | undefined;
  padding?: string | number;
  margin?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  isTransparent?: boolean;
  isUnderTextNeed?: boolean;
  store?: any;
  width?: string;
  left?:string;
}

const DropDownItem = observer(
  ({
    text,
    name,
    setState,
    inputText,
    isLoading,
    input,
    button,
    height,
    padding,
    margin,
    borderRadius,
    backgroundColor,
    isTransparent = false,
    isUnderTextNeed = true,
    width = "unset",
    store,
    left='50%'
  }: DropDownItemProps) => {

  
    

    return (
      <Box sx={{ position: "relative" }}>
        {button && (
          <DropDownButton
            isUnderTextNeed={isUnderTextNeed}
            isTransparent={isTransparent}
            name={text}
            filters={store?.selectedFilters[name]}
            isOpen={dropdownStore.dropdowns[name]}
            onClick={() => dropdownStore.toggleShowDropdown(name)}
          />
        )}
        {input && (
          <>
            <MyInput label={text} setState={setState} />
            {isLoading && <MyText text={"загрузка"} />}
          </>
        )}
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            zIndex: 100,
            width: "624px",
            "@media (max-width:599px)": {
              width: "100%",
            },
          }}
        >
          <DropDown
            left={left}
            name={name}
            height={height}
            padding={padding}
            margin={input ? "0 -160px" : "5px 0"}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}
            isOpen={dropdownStore.dropdowns[name]}
            width={input ? "250px" : "unset"}
            content={
              <DropDownFiltersContent
                content={store?.[name]}
                type={name}
                inputText={inputText}
                store={store}
              />
            }
            setIsOpen={(value) => dropdownStore.setShowDropdown(name, value)}
          />
        </Box>
      </Box>
    );
  }
);

export default DropDownItem;
