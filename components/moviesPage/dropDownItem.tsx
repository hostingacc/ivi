import { Box } from "@mui/material";
import MyInput from "../features/myInput";
import MyText from "../content/myText";
import DropDown from "../features/dropDown";
import DropDownFiltersContent from "./dropDownFiltersContent";
import { dropdownStore } from "@/store/DropdownStore";
import DropDownButton from "../buttons/dropDownButton";
import { MoviesStore } from "@/store/moviesStore";
import { observer } from "mobx-react-lite";
import { Filter } from "../interfaces/filter";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { rootStore } from "@/store/RootStore";
import { toJS } from "mobx";

interface DropDownItemProps {
  id?: string;
  text: string;
  name: string;
/*   content?: any; */
  inputText?:string;
  setState?: Dispatch<SetStateAction<string>> | undefined;
  isLoading?: boolean;
  input?: boolean;
  button?: boolean;
  height?: string | undefined;
  padding?: string | number;
  margin?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  isTransparent?:boolean;
  isUnderTextNeed?:boolean;
  store?:any;
}

const DropDownItem = observer(({
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
    isUnderTextNeed= true,
    store
  }:DropDownItemProps) => {


/*     const [hydrate, setHydrate] = useState(false) */

/*     useEffect(()=>{
      setHydrate(true);
    },[])

    if(!hydrate){
      return null;
    } */
    /* переместить это в более мелкий компонент */

 

    console.log(toJS(store?.sortTypes))

    return (
      <Box sx={{ position: 'relative', zIndex:'2' }}>
        {button && (
          <DropDownButton
            isUnderTextNeed={isUnderTextNeed}
            isTransparent={isTransparent}
            name={text}
            filters={store?.selectedFilters[name]}   
            isOpen={dropdownStore.dropdowns[name]}
            onClick={() => dropdownStore.toggleShowDropdown(name)} />
        )}
        {input && (
          <>
            <MyInput label={text} setState={setState} />
            {isLoading && <MyText text={'загрузка'} />}
          </>
        )}
        <Box sx={{ position: 'absolute', top: '100%', zIndex: 1, width:'39.3rem'}}>
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
    )
})


export default DropDownItem;