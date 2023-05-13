import DropDownItem from "./dropDownItem";
import { moviesStore } from "@/store/moviesStore";
import { useState, useEffect } from "react";
import { dropdownStore } from "@/store/DropdownStore";

const MoviesDropDownList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [actorsInput, setActorsIpnut] = useState('');


    useEffect(() => {
      if (actorsInput) {
        setIsLoading(true);
        moviesStore.fetchPersons(actorsInput).then(() => {
          setIsLoading(false);
          dropdownStore.setShowDropdown('actors', true)
        });
      } else {
        dropdownStore.setShowDropdown('actors', false)
      }
    }, [actorsInput]);
  


    return(
        <>
            <DropDownItem
                button
                id="genresButton"
                text="Жанры"
                name="genres"
                type="genres"
                content={moviesStore.genres}
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
                type="countries"
                content={moviesStore.countries}
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
                type="actors"
                content={moviesStore.actors}
                setState={setActorsIpnut}
                isLoading={isLoading}
            />
        </>
    )
}


export default MoviesDropDownList;

