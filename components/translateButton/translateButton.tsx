import React from "react";
import { useTranslation } from "react-i18next";

import { translationStore } from "@/store/translationStore";
import { observer } from "mobx-react-lite";

const TranslateButton = observer(() => {

const { t, i18n } = useTranslation();
const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    translationStore.setTranslation(lang)
}
    return (
        <>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
        </>
    )
})

export default TranslateButton;