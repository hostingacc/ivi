import { useState, useEffect} from "react"; 
import {Box, Button, Modal, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
/* import trailer from '../../public/trailer.mp4'; */

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
           <div style={{height:'404', position:'relative'}}>
                <div style={{position:'sticky', top: 0, padding:'2rem 0'}}>
                    <video id="video" width="719" height="404" controls>
                        <source src="/trailer.mp4" type="video/mp4" />
                    </video>
                    <Button variant="contained" color="primary" onClick={openModal}>
                        Трейлер
                    </Button>
                </div>
            </div>
       
           

         
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
                    <div>
                        <video width="100%" height="auto" controls>
                            <source src="/trailer.mp4" type="video/mp4" />
                        </video>
                    </div>
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

