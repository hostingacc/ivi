import { Box, Grid, List, Button, Typography, Link, SvgIcon, ListItem, Container } from '@mui/material';
import { Mail, Phone} from "@mui/icons-material";

import FooterLine from './footerLine';
import FooterTitle from './footerTitle';
import MyLink from '../navigation/myLink';
import SmallButton from '../buttons/smallButton';
import MyButton from '../buttons/myButton';
import MyText from '../content/myText';

import React from 'react';
import mouthpiece from '../../public/icons/mouthpiece.svg'
import Hr from '../hr';

import { useTranslation } from 'react-i18next';
import '../translate/i18next';

const Footer = () => {
    const { t } = useTranslation();
    
    return(
        <Container maxWidth={false} sx={{ width: '1240px' }}>

        <Box component="footer" sx={{ flex:1,'@media (max-width: 1200px)': { display: 'none' } }}>
            <Hr/>
            <Grid container justifyContent="space-between" sx={{ mt: '48px', mb:'48px'}}>
                <Grid item>
                    <FooterTitle text={t('О нас')}/>    
                    <List>
                        <ListItem disablePadding>
                            <MyLink link={'https://corp.ivi.ru/'} text={t('О компании')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://corp.ivi.ru/career/#career-vacancy-block'} text={t('Вакансии')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/pages/beta/'} text={t('Программа бета-тестирования')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/info/partners'} text={t('Информация для партнёров')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://corp.ivi.ru/advertisers/'} text={t('Размещение рекламы')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/info/agreement'} text={t('Пользовательское соглашение')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/info/confidential'} text={t('Политика конфиденциальности')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/info/goryachaya-liniya-komplaens'} text={t('Комплаенс')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem> 
                    </List>
                </Grid>
                <Grid item>
                    <FooterTitle text={t('Разделы')}/>    
                    <List>
                        <ListItem disablePadding>
                            <MyLink link={'https://www.ivi.tv/'} text={t('Мой Иви')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/new'} text={t('Что нового')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/movies'} text={t('Фильмы')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/series'} text={t('Сериалы')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/animation'} text={t('Мультфильмы')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/tvplus'} text={'TV+'} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/goodmovies'} text={t('Что посмотреть')} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>
                        <ListItem disablePadding  sx={{marginTop:1}}>
                            <MyLink link={'https://www.ivi.tv/cert'} text={t('Активация сертификата')} gradient={true} fontSize={'15px'} fontWeight={400}/>
                        </ListItem>           
                    </List>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <FooterTitle text={t('Разделы')}/>  
                        </Grid>
                        <Grid item>
                            <Box width={252} sx={{mt:'-10px'}}>
                                <MyText text={t('Мы всегда готовы вам помочь. Наши операторы онлайн 24/7')} align={'left'}/>
                            </Box>
                        </Grid>
                        <Grid item>
                            <MyButton  text={t('Написать в чате')} color='#1f1b2e' hoverColor='#3e3659'/>
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
                            <MyText text={t('Ответы на вопросы')} align={'left'}/>
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
                            <MyText text={t('Смотрите фильмы, сериалы и мультфильмы без рекламы')} align={'center'}/>
                        </Box>
                    </Box>
                </Grid>    
            </Grid>
            <Hr/>
            <FooterLine/>
            </Box>
        </Container>
       
    )
}


export default Footer;