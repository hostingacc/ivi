import { useState, useEffect } from "react";
import { rootStore } from "@/store/RootStore";

export const useInput = (
  name: string,
  store: any,
  dropDownStore: any,
  setIsLoading: (isLoading: boolean) => void
) => {
  const [inputValue, setInputValue] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  let url = `${baseUrl}:3005/persons/actors?keywords=`;

  if (name === "directors") {
    url = `${baseUrl}:3005/persons/directors?keywords=`;
  }

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      rootStore.moviesStore.fetchData1(url, name, inputValue).then(() => {
        setIsLoading(false);
        dropDownStore.setShowDropdown(name, true);
      });
    } else {
      dropDownStore.setShowDropdown(name, false);
    }
  }, [inputValue]);

  return { inputValue, setInputValue };
};
