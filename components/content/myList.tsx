import { List, ListItem } from '@mui/material'
import MyTitle from "./myTitle"
import MyLink from "../navigation/myLink"

const MyList = ({title, content}) => {



    return(
        <>
            <MyTitle text={title} size="0.9375rem"/>
            <List>
                {content?.map(item => {
                    return(
                        <ListItem key={item.content} disablePadding sx={{marginTop:1}}>
                          <MyLink
                                link={item.link}
      
                                content={item.content}
                                fontSize="0.9375rem"
                                fontWeight={400}
                            /> 
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
}
     
export default MyList;
