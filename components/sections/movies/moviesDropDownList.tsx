import DropDownItem from "./dropDownItem";

import { useState } from "react";
import { dropdownStore } from "@/store/DropdownStore";

import { observer } from "mobx-react-lite";
import { rootStore } from "@/store/RootStore";
import { useInput } from "@/hooks/useInput";
import { toJS } from "mobx";

const MoviesDropDownList = observer(({ store }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const { inputValue: actorsInputValue, setInputValue: setActorsInputValue } =
    useInput("actors", store, dropdownStore, setIsLoading);
  const {
    inputValue: directorsInputValue,
    setInputValue: setDirectorsInputValue,
  } = useInput("directors", store, dropdownStore, setIsLoading);

  return (
    <>
      <DropDownItem
        button
        id="genresButton"
        text="Жанры"
        name="genres"
        height="auto"
        padding="1rem"
        margin="5px"
        borderRadius={0}
        backgroundColor="#312b45"
        store={store}
      />
      <DropDownItem
        button
        id="countriesButton"
        text="Страны"
        name="countries"
        height="auto"
        padding="1rem"
        margin="5px"
        borderRadius={0}
        backgroundColor="#312b45"
        store={store}
      
      />
      <DropDownItem
        input
        text="Актеры"
        name="actors"
        padding="1rem"
        backgroundColor="#312b45"
        /*  content={rootStore.moviesStore.actors} */
        setState={setActorsInputValue}
        inputText={actorsInputValue}
        isLoading={isLoading}
        store={rootStore?.ssrStore}
      />
      <DropDownItem
        input
        text="Режисеры"
        name="directors"
        padding="1rem"
        backgroundColor="#312b45"
        /*  content={rootStore.moviesStore.directors} */
        setState={setDirectorsInputValue}
        inputText={directorsInputValue}
        isLoading={isLoading}
        store={rootStore.ssrStore}
      />
    </>
  );
});

export default MoviesDropDownList;
