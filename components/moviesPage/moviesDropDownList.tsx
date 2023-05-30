import DropDownItem from "./dropDownItem";

import { useState, useEffect } from "react";
import { dropdownStore } from "@/store/DropdownStore";

import { observer } from "mobx-react-lite";
import { rootStore } from "@/store/RootStore";



const MoviesDropDownList = observer(({store}:any) => {
    const [isLoading, setIsLoading] = useState(false);

    const [actorsInput, setActorsIpnut] = useState('');
    const [directorsInput, setDirectorsInput] = useState('');


    useEffect(() => {
      if (actorsInput) {
        setIsLoading(true);
       rootStore.moviesStore.fetchPersons(actorsInput).then(() => {
          setIsLoading(false);
          dropdownStore.setShowDropdown('actors', true)
        });
      } else {
        dropdownStore.setShowDropdown('actors', false)
      }
    }, [actorsInput]);
    useEffect(() => {
      if (directorsInput) {
        setIsLoading(true);
       rootStore.moviesStore.fetchDirectors(directorsInput).then(() => {
          setIsLoading(false);
          dropdownStore.setShowDropdown('directors', true)
        });
      } else {
        dropdownStore.setShowDropdown('directors', false)
      }
    }, [directorsInput]);
    /* вместо этого здесь будет кастомный хук  для директоров/ актеров*/

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
                text="фильтр по Актерам"
                name="actors"
                content={rootStore.moviesStore.actors}
                setState={setActorsIpnut}
                inputText={actorsInput}
                isLoading={isLoading}
            />
            <DropDownItem
                input
                text="фильтр по Режисерам"
                name="directors"
                content={rootStore.moviesStore.directors}
                setState={setDirectorsInput}
                isLoading={isLoading}
            />
        </>
    )
})


export default MoviesDropDownList;

