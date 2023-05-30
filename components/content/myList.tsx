import { Box, List, ListItem } from '@mui/material'
import MyTitle from "./myTitle"
import MyLink from "../navigation/myLink"
import MyButton from '../buttons/myButton';
import { MoviesStore } from '@/store/moviesStore';
import CheckIcon from '@mui/icons-material/Check';
import { observer } from 'mobx-react-lite';
import { rootStore } from '@/store/RootStore';

interface MyListProps{
    content:any;
    title?: string | undefined | null;
    itemsPerColumn?: number;
    isButton?:boolean;
    type?:string;
    inputText?:string;
}

const MyList = observer(({title, content, itemsPerColumn = 11, isButton, type, inputText}:MyListProps) => {

    const splitContent = (data) => {
        if (!data || data.length <= itemsPerColumn) {
            return [data];
        } else {
            const firstColumnContent = data.slice(0, itemsPerColumn);
            const restOfContent = data.slice(itemsPerColumn);
            return [firstColumnContent, ...splitContent(restOfContent)];
        }
    }
   
    const columns = splitContent(content);

    return(
    <>
    {title &&  <MyTitle text={title} size="0.9375rem"/>}
   
    <Box style={{display: 'flex'}}>
        {columns?.map((columnContent, index) => (
            <List key={index} sx={{paddingTop: 1, marginRight: index === columns.length - 1 ? 0 : '2rem'}}>
                {columnContent?.map(item => (
                    <ListItem key={item.content} sx={{paddingLeft:'0', paddingTop:'0.3rem'}}>
                        {isButton ?  
                        <MyButton
                        endIcon={<CheckIcon />}
                        color={'transparent'}
                        fontColor='rgba(217,215,224, 0.49)'
                        inputText={inputText}
                        text={item.content}
                        showEndIcon={
                            type
                              ? rootStore.moviesStore.selectedFilters[type].some(
                                  (filter) => filter.name === item.content
                                )
                              : false
                          }
                        func={() =>rootStore.moviesStore.handleButtonClick(item.content, item.id, type)}/> :
                        
                        <MyLink
                            link={item.link}    
                            content={item.content}
                            fontSize="0.9375rem"
                            fontWeight={400}
                        /> }

                  
                    </ListItem>
                ))}
            </List>
        ))}
    </Box>
    </>
    )
})
   
export default MyList;
