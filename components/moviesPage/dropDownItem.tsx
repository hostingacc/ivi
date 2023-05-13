import { Box } from "@mui/material";
import MyInput from "../features/myInput";
import MyText from "../content/myText";
import DropDown from "../features/dropDown";
import DropDownFiltersContent from "./dropDownFiltersContent";
import { dropdownStore } from "@/store/DropdownStore";
import DropDownButton from "../buttons/dropDownButton";
import { moviesStore } from "@/store/moviesStore";
import { observer } from "mobx-react-lite";


const DropDownItem = observer(({
    id,
    text,
    name,
    type,
    content,
    setState,
    isLoading,
    input,
    button,
    height,
    padding,
    margin,
    borderRadius,
    backgroundColor
  }:any) => {
    return (
      <Box sx={{ position: 'relative', zIndex:'2' }}>
        {button && (
          <DropDownButton  name={text} filters={moviesStore.selectedFilters[name]} isOpen={dropdownStore.dropdowns[name]} onClick={() => dropdownStore.toggleShowDropdown(name)}/>
        )}
        {input && (
          <>
            <MyInput label={text} setState={setState} />
            {isLoading && <MyText text={'загрузка'} />}
          </>
        )}
        <Box sx={{ position: 'absolute', top: '100%', zIndex: 1 }}>
          <DropDown
            name={name}
            height={height}
            padding={padding}
            margin={margin}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}
            isOpen={dropdownStore.dropdowns[name]}
            content={
              <DropDownFiltersContent
                content={content}
                type={type}
              />
            }
            setIsOpen={(value) => dropdownStore.setShowDropdown(name, value)}
          />
        </Box>
      </Box>
    )
})


export default DropDownItem;