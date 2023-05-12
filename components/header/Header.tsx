import { Box, Button, IconButton, List, ListItem, Stack, Typography, Container } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import dropdown from '@/store/Dropdown';
import { observer } from 'mobx-react-lite';

import logo from '../../public/logo/reposition_iviLogoPlateRounded.svg'
import React, { useState } from 'react';
import TranslateButton from '../translateButton/translateButton';
import { useTranslation } from 'react-i18next';
import '../translate/i18next';
import MyLink from '../navigation/myLink';
import MyButton from '../buttons/myButton';
import DropDown from '../features/dropDown';

import ProfileDropDownContent from './dropdownContent/profileDropDownContent';
import SubscribeDropdownContent from './dropdownContent/subscribeDropdownContent';
import FilmsDropDownContent from './dropdownContent/filmsDropDownContent';


const Header = observer(() => {
    const { t } = useTranslation();

    const [showFilmsDropdown, setShowFilmsDropdown] = useState(true);
    const [showProfileDropDown, setShowProfileDropDown] = useState(false);
    const [showSubscribeDropDown, setShowSubscribeDropdown] = useState(false); 

    return (
        <Container maxWidth={false} sx={{ width: '1240px', mb:'1rem' }}>
      
        <Box
            component="header" 
            sx={{
           
            pt:'1rem',

            position:'relative',
            width:'100%',
            zIndex:3,
            "@media (max-width:1200px)": {
                justifyContent: "space-between",
                marginLeft: "40px",
                marginRight: "60px"
            },
            "@media (max-width:600px)": {
                justifyContent: "space-between",
                marginLeft: "10px",
                marginRight: "30px"
            }
        }}>
            <Box sx={{
                zIndex:3, 
                width:'100%',
                top:0, 
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position:'relative'
            }}>

           
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={"1vw"}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}>
                    <MyLink link={'/'} content={logo()}/>
                </Box>
                <List
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "1.6rem",
                        "& .css-1p823my-MuiListItem-root": {
                            width: "auto",
                            padding: "8px 8px",
                            cursor: "pointer",
                        },
                        "@media (max-width:1200px)": {
                            display: "none"
                        }
                    }}>
                    <ListItem  onMouseOver={() => { setShowFilmsDropdown(false) }}> 
                        <MyLink link={'/movies/all'} fontWeight={700} content={t('Что нового')}/>   
                    </ListItem>
                    <ListItem onMouseEnter={() => { setShowFilmsDropdown(true) }}>
                        <MyLink link={'/movies/all'} fontWeight={700} content={t('Фильмы')}/>   
                    </ListItem>
                    <ListItem onMouseEnter={() => { setShowFilmsDropdown(false) }}>
                        <MyLink link={'/movies/all'} fontWeight={700} content={t('Сериалы')}/>   
                    </ListItem>
                    <ListItem onMouseEnter={() => { dropdown.changeHandler(true) }}>
                        <MyLink link={'/movies/all'} fontWeight={700} content={t('Мультфильмы')}/> 
                    </ListItem>
                    <ListItem
                            onMouseOver={() => { dropdown.changeHandler(false) }}
                            onMouseEnter={() => { dropdown.changeHandlerSubscribe(false) }}
                        >
                        <MyLink link={'/admin'} fontWeight={700} content={'Админка'}/>
                    </ListItem>
                </List>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}  gap={"1vw"}>

                <Box  
                    onMouseEnter={() => { setShowSubscribeDropdown(true) }}>
                    <MyLink 
                        link='/subscribe'
                        content={
                        <MyButton text={'Смотреть 30 дней бесплатно'} width={'13.3rem'} size={'0.83rem'} color={'#ea003d'}/>
                            }
                    />
                </Box>
             

                <Button
                    startIcon={<SearchIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
                    sx={{
                        color: "rgba(255,255,255,.48)",
                        fontSize: "15px",
                        fontWeight: "700",
                        textTransform: "capitalize",
                        width: "90px",
                        height: "40px",
                        "@media (max-width:1200px)": {
                            display: "none"
                        }
                    }}
                    >{t('Поиск')}</Button>
                <IconButton
                    sx={{
                        width: "40px",
                        height: "40px",
                        "@media (max-width:600px)": {
                            display: "none"
                        }
                    }}
                >
                    <NotificationsIcon
                        sx={{ color: "rgba(255,255,255,.48)" }}
                    />
                </IconButton>
                <Button
                    onMouseEnter={() => { setShowProfileDropDown(true) }}
                    variant="outlined"
                    sx={{
                        width: "48px",
                        height: "48px",
                        border: "1.5px solid rgba(255,255,255,.48)",
                        borderRadius: "10px",
                        ":hover": {
                            border: "1.5px solid white",
                        },
                        "@media (max-width:600px)": {
                            display: "none"
                        }
                    }}
                >
                        <PersonOutlineIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                </Button>
                <TranslateButton />
            </Stack>
            </Box>
            {showProfileDropDown && (
                <Box sx={{ position: 'absolute', width:'100%',top: 0, zIndex: 1}}>
                    <DropDown
                        content={<ProfileDropDownContent/>}
                        isOpen={showProfileDropDown}
                        setIsOpen={setShowProfileDropDown}
                        height='28rem'
                        padding={'5rem 1rem'}
                        margin={0}
                        borderRadius='1rem'
                        backgroundColor="#1f1b2e"
                        onMouseLeave={true}
                    />
            </Box>)}
            {showFilmsDropdown && (
                <Box sx={{ position: 'absolute', width:'100%',top: 0, zIndex: 1}}>
                    <DropDown
                        content={<FilmsDropDownContent/>}
                        isOpen={showFilmsDropdown}
                        setIsOpen={setShowFilmsDropdown}
                        height='28rem'
                        padding={'5rem 1rem'}
                        margin={0}
                        borderRadius='1rem'
                        backgroundColor="#1f1b2e"
                        onMouseLeave={true}
                    />
            </Box>)}
            {showSubscribeDropDown && (
                <Box sx={{ position: 'absolute', width:'100%',top: 0, zIndex: 1}}>
                    <DropDown
                        content={<SubscribeDropdownContent/>}
                        isOpen={showSubscribeDropDown}
                        setIsOpen={setShowSubscribeDropdown}
                        height='32.5rem'
                        padding={'5rem 1rem'}
                        margin={0}
                        borderRadius='1rem'
                        backgroundColor="#1f1b2e"
                        onMouseLeave={true}
                    />
            </Box>)}


        </Box>  

            </Container>
    )
})


export default Header;