import MyText from "./myText";
import { observer } from "mobx-react-lite";
import { translationStore } from "@/store/translationStore";
import { TextProps } from "../interfaces/textProps";
import { cutText } from "@/functions/cutText";
import ShowMoreText from "../features/showMoreText";

interface TranslationDynamicDataProps extends TextProps {
    nameRu: string;
    nameEn: string;
    shouldCut?: boolean;
}

const TranslationDynamicData = observer(({nameRu, nameEn, align = 'center', color = 'rgba(255,255,255,.48)', weight = 400, size = '0.98rem', line = '1.25rem', shouldCut =false}:TranslationDynamicDataProps) => {


    
 /*    const displayedText = cutText(translationStore.translation === 'ru' ? nameRu : nameEn, length); */


    return(
        <>
        {shouldCut ? <ShowMoreText text={translationStore.translation ==='ru' ? nameRu: nameEn} length={15} color={color} />
        :  <MyText text={translationStore.translation ==='ru' ? nameRu: nameEn} align={align} color={color} weight={weight} size={size} line={line}/>
        }
        </>

    )
})

export default TranslationDynamicData;