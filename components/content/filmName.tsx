import MyText from "./myText";
import { observer } from "mobx-react-lite";
import { translationStore } from "@/store/translationStore";
import { TextProps } from "../interfaces/textProps";

interface FilmNameProps extends TextProps {
    nameRu: string;
    nameEn: string;
}

const FilmName = observer(({nameRu, nameEn, align = 'center', color = 'rgba(255,255,255,.48)', weight = 400, size = 15, line = '20px'}:FilmNameProps) => {

    return(
        <MyText text={translationStore.translation ==='ru' ? nameRu: nameEn} align={align} color={color} weight={weight} size={size} line={line}/>
    )
})

export default FilmName;