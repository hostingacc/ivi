import { useState, useEffect } from "react";

interface UseSliderProps {
  filterKey: string;
  store: any;
}

export const useSlider = (filterKey: string, store: any) => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const sendRequest = () => {
    store.moviesStore.handleMinRatingChange(value, filterKey);
  };

  useEffect(() => {
    if (store.moviesStore?.selectedFilters?.[filterKey][0]?.id) {
      setValue(+store.moviesStore.selectedFilters[filterKey][0].id);
    }
  }, [store.moviesStore?.selectedFilters?.[filterKey][0]?.id]);

  return { value, handleSliderChange, sendRequest };
};
