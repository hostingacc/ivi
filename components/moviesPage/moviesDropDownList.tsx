import DropDownItem from "./dropDownItem";

import { useState } from "react";
import { dropdownStore } from "@/store/DropdownStore";

import { observer } from "mobx-react-lite";
import { rootStore } from "@/store/RootStore";
import { useInput } from "@/hooks/useInput";


const MoviesDropDownList = observer(({store}:any) => {

  const [isLoading, setIsLoading] = useState(false);

  const { inputValue: actorsInputValue, setInputValue: setActorsInputValue } = useInput('actors', rootStore, dropdownStore, setIsLoading);
  const { inputValue: directorsInputValue, setInputValue: setDirectorsInputValue } = useInput('directors', rootStore, dropdownStore, setIsLoading);

    return(
        <>
            <DropDownItem
                button
                id="genresButton"
                text="Жанры"
                name="genres"
                content={store?.genres}
                height='auto'
                padding='1rem'
                margin='0.3rem'
                borderRadius={0}
                backgroundColor="#312b45"
                
            />
            <DropDownItem
                button
                id="countriesButton"
                text="Страны"
                name="countries"
                content={store?.countries}
                height='auto'
                padding='1rem'
                margin='0.3rem'
                borderRadius={0}
                backgroundColor="#312b45"
            />
            <DropDownItem
                input
                text="Актеры"
                name="actors"
                padding='1rem'
                 content={rootStore.moviesStore.actors}
                setState={setActorsInputValue}
                inputText={actorsInputValue}
                isLoading={isLoading}
            />
            <DropDownItem
                input
                text="Режисеры"
                name="directors"
                padding='1rem'
                content={rootStore.moviesStore.directors}
                setState={setDirectorsInputValue}
                isLoading={isLoading}
            />
        </>
    )
})


export default MoviesDropDownList;

