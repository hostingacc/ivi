import { Box, Stack, Slider } from "@mui/material";

import { useState, useRef, useEffect } from "react";
import { rootStore } from "@/store/RootStore";
import MoviesDropDownList from "./moviesDropDownList";
import MyText from "../content/myText";
import MyButton from "../buttons/myButton";

const FiltersList = ({store}:any) => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    const sliderRef = useRef<HTMLSpanElement>(null);
    const sliderRef2 = useRef<HTMLSpanElement>(null);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };
    const handleSliderChange2 = (event: Event, newValue: number | number[]) => {
      setValue2(newValue as number);
    };

    const sendRequest = () => {
      rootStore.moviesStore.handleMinRatingChange(value, 'minRating')
    }
    const sendRequest2 = () => {
      rootStore.moviesStore.handleMinRatingChange(value2, 'numRatings')
    }

    useEffect(() => {
      if (rootStore.moviesStore?.selectedFilters?.minRating[0]?.id) {
        setValue(+rootStore.moviesStore.selectedFilters.minRating[0].id);
      }
    }, [rootStore.moviesStore?.selectedFilters?.minRating[0]?.id]);

    useEffect(() => {
      if (rootStore.moviesStore?.selectedFilters?.numRatings[0]?.id) {
        setValue2(+rootStore.moviesStore.selectedFilters.numRatings[0].id);
      }
    }, [rootStore.moviesStore?.selectedFilters?.numRatings[0]?.id]);
  
    return (
        <>
          <Box
            sx={{
              backgroundColor: '#1f1b2e',
              height: '12.18rem',
              width: '100%',
              p: '1rem',
            }}
          >
            <Stack direction="row" gap={2} justifyContent={'space-around'}>
              <MoviesDropDownList store={store}/>
            </Stack>
            <Stack direction="row" gap={2} justifyContent={'space-around'} sx={{mt:'2rem'}}>
            <Box sx={{width:'14rem'}}>
              <MyText text={'по рейтингу'} color={'#fff'}/>
                  <Slider
                    ref={sliderRef}
                    onMouseUp={sendRequest}
                    aria-label="Small steps"
                    step={0.1}
                    marks
                    min={0}
                    max={10}
                    value={value}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    color="secondary"
                  />
                </Box>
                <Box sx={{width:'14em'}}>
                <MyText text={'по количеству голосов'} color={'#fff'}/>

                  <Slider
                    ref={sliderRef2}
                    onMouseUp={sendRequest2}
                    aria-label="Small steps"
                    step={10000}
                    marks
                    min={0}
                    max={10000000}
                    value={value2}
                    onChange={handleSliderChange2}
                    valueLabelDisplay="auto"
                    color="secondary"
                  />
                </Box>
            </Stack>
                {/* декомпозиция */}
         {/*        <MyButton text="очистить фильтры" func={moviesStore.resetFilters}/> */}
          </Box>
        </>
      );
  };

  export default FiltersList;

