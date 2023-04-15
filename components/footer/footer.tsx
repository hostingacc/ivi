import { Box, Grid, List, Button, Typography, Link, SvgIcon, ListItem } from '@mui/material';
import { Mail, Phone} from "@mui/icons-material";

import FooterLine from './footerLine';
import FooterTitle from './footerTitle';
import MyLink from '../navigation/link';
import SmallButton from '../buttons/smallButton';
import MyButton from '../buttons/button';
import MyText from '../content/myText';

import mouthpiece from '../../public/icons/mouthpiece.svg'
import Hr from '../hr';

const Footer = () => {

    
    return(
        <Box component="footer" sx={{ flex:1,'@media (max-width: 1200px)': { display: 'none' } }}>
            <Hr/>
            <Grid container justifyContent="space-between" sx={{ mt: '48px', mb:'48px'}}>
                <Grid item>
                    <FooterTitle text={'О нас'}/>    
                    <List>
                        <ListItem disablePadding>
                            <MyLink link={'https://corp.ivi.ru/'} text={'О компании'}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://corp.ivi.ru/career/#career-vacancy-block'} text={'Вакансии'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/pages/beta/'} text={'Программа бета-тестирования'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/info/partners'} text={'Информация для партнёров'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://corp.ivi.ru/advertisers/'} text={'Размещение рекламы'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/info/agreement'} text={'Пользовательское соглашение'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/info/confidential'} text={'Политика конфиденциальности'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/info/goryachaya-liniya-komplaens'} text={'Комплаенс'} />
                        </ListItem> 
                    </List>
                </Grid>
                <Grid item>
                    <FooterTitle text={'Разделы'}/>    
                    <List>
                        <ListItem disablePadding>
                            <MyLink link={'https://www.ivi.tv/'} text={'Мой Иви'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/new'} text={'Что нового'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/movies'} text={'Фильмы'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/series'} text={'Сериалы'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/animation'} text={'Мультфильмы'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/tvplus'} text={'TV+'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/goodmovies'} text={'Что посмотреть'} />
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/cert'} text={'Активация сертификата'} gradient={true}/>
                        </ListItem>           
                    </List>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <FooterTitle text={'Разделы'}/>  
                        </Grid>
                        <Grid item>
                            <Box width={252} sx={{mt:'-10px'}}>
                                <MyText text={'Мы всегда готовы вам помочь. Наши операторы онлайн 24/7'} align={'left'}/>
                            </Box>
                        </Grid>
                        <Grid item>
                            <MyButton  text={'Написать в чате'} />
                        </Grid>
                        <Grid item>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <SmallButton icon={<Mail sx={{ color: "#fff", width:'16px' }} />}/>
                                </Grid>
                                <Grid item>
                                    <SmallButton icon={<Phone sx={{ color: "#fff", width:'16px' }}/>}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                        <Link
                            href="https://ask.ivi.ru"
                            sx={{
                                color: 'white',
                                textDecoration: 'none',
                                '&:hover': {
                                color: 'gray',
                                },
                            }}
                            >
                            ask.ivi.ru
                            </Link>
                        </Grid>
                        <Grid item sx={{mt:'-15px'}}>
                            <MyText text={'Ответы на вопросы'} align={'left'}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Box display='flex' flexDirection='column' justifyContent={'center'}>
                        <Button 
                            sx={{
                                width: 104,
                                height: 104,
                                borderRadius: '20px',
                                margin: '0 auto',
                                background: 'linear-gradient(180deg, #A869F0 0%, #834CC2 100%)',
                                boxShadow: '0 0 104px #A869F0',
                            
                                    }}>
                        {mouthpiece()} 
                        </Button>
                        <Box width={252} marginTop={'20px'}>
                            <MyText text={'Смотрите фильмы, сериалы и мультфильмы без рекламы'} align={'center'}/>
                        </Box>
                    </Box>
                </Grid>

                
                
                
            </Grid>
            <Hr/>
            <FooterLine/>
            
      </Box>
    )
}


export default Footer;