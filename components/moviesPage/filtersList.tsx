import { Box, Stack } from "@mui/material";
import MoviesDropDownList from "./moviesDropDownList";
import { styled } from '@mui/material/styles';
import SlidersList from "./slidersList";

import { toJS } from "mobx";
import MyButton from "../buttons/myButton";
import { rootStore } from "@/store/RootStore";

const StyledBox = styled(Box)({
  backgroundColor: '#1f1b2e',
  height: '12.18rem',
  width: '100%',
  padding: '1rem',
  '@media (max-width:876px)': {
    height:'33.1rem',
    display:'flex',
    flexDirection:'column',
    flexWrap:'wrap'
  },
  '@media (max-width:599px)': {
    height:'53.1rem',
    flexDirection:'row'
  },
});

const TopLine = styled(Stack)({
  flexDirection:'row',
  '@media (max-width:876px)': {
    height:'33.1rem',
    flexDirection:'column',
    flexWrap:'wrap'
  },
  '@media (max-width:599px)': {
    width:'100%'
  },
});

const BottomLine = styled(Stack)({
  marginTop:'2rem',
  justifyContent:'space-around',
  '@media (max-width:876px)': {
    height:'33.1rem',
    flexDirection:'column',
    flexWrap:'wrap',
    paddingLeft:'2rem'
  },
  '@media (max-width:599px)': {
    justifyContent:'flex-start',
    width:'100%'
  },
});



const FiltersList = ({store}:any) => {


  
  return (
    <StyledBox>
      <TopLine gap={2} justifyContent={'space-around'}>
      <MoviesDropDownList store={store}/> 
      </TopLine>
      <BottomLine direction="row" gap={2}>
        <SlidersList/>
      </BottomLine>
         <MyButton text="очистить фильтры" func={() => rootStore.moviesStore.resetFilters(false)}/> 
    </StyledBox>
    );
  };

  export default FiltersList;

