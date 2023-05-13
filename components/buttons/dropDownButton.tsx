import { Button, Grid, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import MyText from '../content/myText';

const DropDownButton = observer(({ name, filters, isOpen, onClick }:any) => {
    console.log(toJS(filters.map(e=>e.name)))
    console.log(name)
  return (
    <Button id={name} onClick={onClick} sx={{height:'8rem', width:'18rem', textTransform:'capitalize'}}>
      <Grid container>
        <Grid item xs={10}>
          <Grid container direction="column">
            <Grid item>
              <Typography>{name}</Typography>
            </Grid>
            <Grid item>
            <Stack direction='row' gap={1} flexWrap='wrap'>
                {filters.map(e=>{
                    return(
                        <MyText text={e.name}/>
                    )
                })}
                 </Stack>
              
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Grid>
      </Grid>
    </Button>
  )
});

export default DropDownButton;