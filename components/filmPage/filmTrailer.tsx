import { useState, useEffect} from "react"; 
import {Box, Button, Modal, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MyButton from "../buttons/myButton";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const FilmTrailer = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);



    const openModal = () => {
        setModalIsOpen(true);

    }

    const closeModal = () => {
        setModalIsOpen(false);

    }

    useEffect(() => {
        if (modalIsOpen) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'unset';
        }
    }, [modalIsOpen]);

   
    
    return(
   
        <> 
           <Box sx={{height:'404', position:'relative'}}>
                <Box sx={{position:'sticky', top: 0, padding:'2rem 0'}}>
                    <video id="video" width="719" height="404" controls>
                        <source src="/trailer.mp4" type="video/mp4" />
                    </video>
                    <Box sx={{mt:'1rem'}}>
                        <MyButton 
                            text={'Трейлер'}
                            icon={<PlayArrowOutlinedIcon/>}
                            func={openModal}
                            color={'rgba(255,255,255,.08)'}
                            hoverColor={'rgba(255,255,255,.18)'}/>
                    </Box>
                </Box>
            </Box>
       
           

         
            <Modal
                open={modalIsOpen}
                onClose={closeModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                }}
            >
              <Box
                sx={{
                    position: 'relative',
                }}>
                    <IconButton
                        onClick={closeModal}
                        sx={{
                            position: 'absolute',
                            top: '-2rem',
                            right: '-2rem',
                            color:'#fff'
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box>
                        <video width="100%" height="auto" controls>
                            <source src="/trailer.mp4" type="video/mp4" />
                        </video>
                    </Box>
                </Box>
            </Modal>
            {modalIsOpen && (
                <Box
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(16, 14, 25, 0.9)',
                    }}
                />
            )}

        </>

    )
}

export default FilmTrailer;

