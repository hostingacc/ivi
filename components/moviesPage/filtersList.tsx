import { Box, Stack, Slider } from "@mui/material";
import { moviesStore } from "@/store/moviesStore";
import { useState, useRef } from "react";

import MoviesDropDownList from "./moviesDropDownList";

const FiltersList = () => {
    const [value, setValue] = useState(0);

    const sliderRef = useRef<HTMLSpanElement>(null);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    const sendRequest = () => {
      moviesStore.handleMinRatingChange(value, 'minRating')
    }

  
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
            <Stack direction="row" gap={2}>
              <MoviesDropDownList/>
                <Box sx={{width:'10rem'}}>
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
                  />
                </Box>
                
          
            </Stack>
          </Box>
        </>
      );
  };

  export default FiltersList;