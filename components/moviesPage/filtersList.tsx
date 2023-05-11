import { Box, Stack, Slider } from "@mui/material";
import MyButton from "../buttons/myButton";
import { moviesStore } from "@/store/moviesStore";
import { useEffect, useState, useRef } from "react";
import DropDown from "../features/dropDown";
import DropDownFiltersContent from "./dropDownFiltersContent";
import MyInput from "../features/myInput";
import MyText from "../content/myText";






const FiltersList = () => {
    const [showGenres, setShowGenres] = useState(false);
    const [showCountries, setShowCountries] = useState(false);

    const [actorsInput, setActorsIpnut] = useState('');
    const [showActors, setShowActors] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [value, setValue] = useState(0);

    const sliderRef = useRef<HTMLSpanElement>(null);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    const sendRequest = () => {
      moviesStore.handleMinRatingChange(value, 'minRating')
    }


    /* Аналогично сделать слайдер компонентом и добавить количество голосов */

    useEffect(() => {
      if (actorsInput) {
        setIsLoading(true);
        moviesStore.fetchPersons(actorsInput).then(() => {
          setIsLoading(false);
          setShowActors(true);
        });
      } else {
        setShowActors(false);
      }
    }, [actorsInput]);
  
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
            <Box sx={{ position: 'relative' }}>
                <MyButton
                    id={'genresButton'}
                    text="Жанры"
                    color="#312b45"
                    func={() => {
                      setShowGenres(!showGenres);
                      setShowCountries(false);
                    }}
                />
                {showGenres && (
                <Box sx={{ position: 'absolute', top: '100%', zIndex: 1 }}>
                  <DropDown 
                   isOpen = {showGenres} 
                    content={
                    <DropDownFiltersContent 
                      content={moviesStore.genres}
                      type={'genres'}
                    />}
                    setIsOpen={setShowGenres}
                  />
                  </Box>
                )}
              </Box>
              <Box sx={{ position: 'relative' }}>
                <MyButton
                id={'countriesButton'}
                  text="Страны"
                  color="#312b45"
                  func={() => {
                    setShowCountries(!showCountries);
                    setShowGenres(false);
                  }}
                />
                {showCountries && (
                    <Box sx={{ position: 'absolute', top: '100%', zIndex: 1 }}>
                      <DropDown 
                        isOpen = {showCountries} 
                        content={
                        <DropDownFiltersContent 
                          content={moviesStore.countries}
                          type={'countries'}
                        />}
                      setIsOpen={setShowCountries}
                  />
                     </Box>
                )}
             
              </Box>
              <Box sx={{ position: 'relative' }}>
                <MyInput label="фильтр по Актерам" setState={setActorsIpnut}/>
                {isLoading && <MyText text={'загрузка'}/>}
                  {showActors && (
                            <Box sx={{ position: 'absolute', top: '100%', zIndex: 1 }}>
                            <DropDown 
                              isOpen = {showActors} 
                              content={
                              <DropDownFiltersContent 
                                content={moviesStore.actors}
                                type={'actors'}
                              />}
                            setIsOpen={setShowActors}
                        />
                          </Box>
                  )}
                </Box>
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