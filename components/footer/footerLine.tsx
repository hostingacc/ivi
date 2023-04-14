import React from 'react';
import { Grid, Button } from '@mui/material';
import MyButton from '../buttons/button';
import SmallButton from '../buttons/smallButton';

import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import DevicesIcon from '@mui/icons-material/Devices';

import mouthpiexe from '../../public/icons/mouthpiexe.svg';

import vkIcon from '../../public/icons/vk.svg';
import odnoklassnikIcon from '../../public/icons/odnoklassniki.svg';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterLine = () => {

    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <MyButton text={'App Store'} smallText={'Загрузить в'} icon={<AppleIcon/>}/>
                <MyButton text={'Google Play'} smallText={'Доступно в'} icon={<GoogleIcon/>}/>
                <MyButton text={'Smart TV'}smallText={'Смотрите на'} icon={<HomeMaxIcon/>}/>
                <MyButton text={'Все устройства'} icon={<DevicesIcon/>}/>
            </Grid>
            <Grid item xs={6}>
               <SmallButton icon={vkIcon} isCircle={true}/>
               <SmallButton icon={odnoklassnikIcon} isCircle={true}/>
               <SmallButton icon={ <PhoneForwardedIcon sx={{ color: "#fff", width:'16px' }}/> }isCircle={true}/>
               <SmallButton icon={<TelegramIcon sx={{ color: "#fff", width:'16px' } }/>}isCircle={true}/>
               <SmallButton icon={<TwitterIcon sx={{ color: "#fff", width:'16px' }} />}isCircle={true}/>
               <SmallButton icon={<LinkedInIcon sx={{ color: "#fff", width:'16px' }} />}isCircle={true}/>
            </Grid>
        </Grid>
    )
}


export default FooterLine;