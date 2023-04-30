import { Tooltip } from '@mui/material';


const MyTooltip = ({content, text}:any) => {


    return(
        <Tooltip title={text} placement="top-end" disableInteractive  componentsProps={{
            tooltip: {
            sx: {
                bgcolor: '#100e19',
                position:'absolute',
                top:'-1rem',
                whiteSpace:'nowrap'
            },
            },
        }}>
            {content}
        </Tooltip>
    )
}

export default MyTooltip;