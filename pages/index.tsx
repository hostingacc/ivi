import Footer from '@/components/footer/footer';
import CommentsList from '@/components/comments/commentsList';
import { Box,  Container, Typography } from '@mui/material'


const Home = () => {
  return (
    <Box>
      <Container 
        sx={{
        width: '1216px',
        ml: 'auto',
        mr: 'auto',
      }}>




      <CommentsList/>   
      <Footer />
    </Container>
    </Box>
  )
}
export default Home;