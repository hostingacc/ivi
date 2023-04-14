import { Box, Grid, List, Button, Typography, Link, SvgIcon, ListItem } from '@mui/material';
import { Mail, Phone} from "@mui/icons-material";

import FooterLine from './footerLine';
import FooterTitle from './footerTitle';
import MyLink from '../navigation/link';
import SmallButton from '../buttons/smallButton';
import MyButton from '../buttons/button';

import mouthpiece from '../../public/icons/mouthpiece.svg'

const Footer = () => {

    
    return(
        <Box component="footer">
            <Grid container>
                <Grid item>
                    <FooterTitle text={'О нас'}/>    
                    <List>
                        <ListItem>
                            <MyLink link={'https://corp.ivi.ru/'} text={'О компании'}/>
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://corp.ivi.ru/career/#career-vacancy-block'} text={'Вакансии'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/pages/beta/'} text={'Программа бета-тестирования'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/info/partners'} text={'Информация для партнёров'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://corp.ivi.ru/advertisers/'} text={'Размещение рекламы'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/info/agreement'} text={'Пользовательское соглашение'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/info/confidential'} text={'Политика конфиденциальности'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/info/goryachaya-liniya-komplaens'} text={'Комплаенс'} />
                        </ListItem> 
                    </List>
                </Grid>
                <Grid item>
                    <FooterTitle text={'Разделы'}/>    
                    <List>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/'} text={'Мой Иви'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/new'} text={'Что нового'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/movies'} text={'Фильмы'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/series'} text={'Сериалы'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/animation'} text={'Мультфильмы'} />
                        </ListItem>
                        <ListItem>
                            <MyLink link={'https://www.ivi.tv/cert'} text={'Активация сертификата'} gradient={true}/>
                        </ListItem>           
                    </List>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h6">Служба поддержки</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                Мы всегда готовы вам помочь. Наши операторы онлайн 24/7
                            </Typography>
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
                            <Link href="https://ask.ivi.ru">ask.ivi.ru</Link>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">ответы на вопросы</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button 
                        sx={{
                            width: 104,
                            height: 104,
                            borderRadius: '20px',
                            justifyContent: 'center',
                            background: 'linear-gradient(180deg, #A869F0 0%, #834CC2 100%)',
                            boxShadow: '0 0 104px #A869F0',
                         
                                }}>
                       {mouthpiece()} 
                    </Button>
                </Grid>
                <FooterLine/>
            </Grid>




      </Box>
    )
}


export default Footer;