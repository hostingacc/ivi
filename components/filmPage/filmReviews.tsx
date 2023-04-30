import MyText from "../content/myText";
import MyTitle from "../content/myTitle";
import CommentsList from "../comments/commentsList";
import { countComments } from "../../functions/countComments";
import { Box } from "@mui/material";

import data from '../../public/temporaryFiles/data.json';
import { modalStore } from "@/store/modalStore";

const FilmReviews = () => {

    const count = countComments(data.comments)

    const openModal = () => {
        modalStore.showReviews();
        modalStore.openModal();
    }


    return(
        <>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <MyTitle text="Отзывы" isButton={true} onClick={openModal}/>
                <Box sx={{ ml: 1, mt: '-4px' }}>
                    <MyText text={count} align="left" />
                </Box>
                </Box>
            
            <MyText text={'О фильме '} align={'left'}/>
            <CommentsList showChildComments={false} />
            
        </>
    )
}

export default FilmReviews;