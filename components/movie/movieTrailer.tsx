import { useState, useEffect} from "react"; 
import {Box, Button, Modal, IconButton, Stack} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MovieTrailerButtons from "./movieTrailerButtons";
import MedallionList from "./medallionsList";

const MovieTrailer = ({rating, persons, video}) => {

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
                    <video className="movieTrailer" id="video"  controls>
                        <source src="/trailer.mp4" type="video/mp4" />
                    </video>
                    <Stack direction='row' sx={{alignItems:'center'}}>
                    <Box sx={{
                        '@media (min-width:1159px)': {
                        display:'none',
                    
                        }
                    }}>
                        <MedallionList rating={rating} persons={persons}/>
                    </Box>
                    <MovieTrailerButtons openModal={openModal}/>
                    </Stack>
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

export default MovieTrailer;

