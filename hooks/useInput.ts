import { useState, useEffect } from "react";


export const useInput = (name: string, store:any, dropDownStore:any, setIsLoading: (isLoading: boolean) => void) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (inputValue) {
          setIsLoading(true);
          store.moviesStore.fetchData1(store.moviesStore[`${name}Url`], name, inputValue).then(() => {
            setIsLoading(false);
            dropDownStore.setShowDropdown(name, true)
          });
        } else {
          dropDownStore.setShowDropdown(name, false)
        }
      }, [inputValue]);
    
      return { inputValue, setInputValue };
}