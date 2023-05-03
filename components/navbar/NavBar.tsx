import { Box, Button, IconButton, List, ListItem, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import Link from 'next/link';
import FilmsDropdown from './FilmsDropdown';
import dropdown from '@/store/Dropdown';
import { observer } from 'mobx-react-lite';
import AlertDropdown from './AlertDropdown';
import SubscribeDropdown from './SubscribeDropdown';
import UserDropdown from './UserDropdown';

import logo from '../../public/logo/reposition_iviLogoPlateRounded.svg'
import React from 'react';
import Image from 'next/image';
import TranslateButton from '../translateButton/translateButton';
import { useTranslation } from 'react-i18next';
import '../translate/i18next';
import MyLink from '../navigation/myLink';
import MyButton from '../buttons/myButton';

export const NavBar = observer(() => {
    const { t } = useTranslation();

    return (
        <>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6vw",
            zIndex:2,
            margin: "10px 0",
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
                        marginLeft: "60px",
                        "& .css-1p823my-MuiListItem-root": {
                            width: "auto",
                            padding: "8px 8px",
                            cursor: "pointer",
                        },
                        "@media (max-width:1200px)": {
                            display: "none"
                        }
                    }}>
                    <ListItem  onMouseOver={() => { dropdown.changeHandler(false) }}> 
                        <Typography sx={{ color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700" }}>
                        {t('Что нового')}
                        </Typography>
                    </ListItem>
                    <ListItem onMouseEnter={() => { dropdown.changeHandler(true) }}>
                        <Typography sx={{ color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700" }}>
                        {t('Фильмы')}
                        </Typography>
                    </ListItem>
                    <ListItem onMouseEnter={() => { dropdown.changeHandler(true) }}>
                        <Typography sx={{ color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700" }}>
                        {t('Сериалы')}
                        </Typography>
                    </ListItem>
                    <ListItem onMouseEnter={() => { dropdown.changeHandler(true) }}>
                        <Typography sx={{ color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700" }}>
                        {t('Мультфильмы')}
                        </Typography>
                    </ListItem>
                    <ListItem
                            onMouseOver={() => { dropdown.changeHandler(false) }}
                            onMouseEnter={() => { dropdown.changeHandlerSubscribe(false) }}
                        >
                        <Typography sx={{ color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700" }}>
                        {t('ТВ-каналы')}
                        </Typography>
                    </ListItem>
                </List>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={"1vw"}>

                <MyLink 
                    link='/subscribe'
                    content={
                        <MyButton text={'Смотреть 30 дней бесплатно'} width={'13.3rem'} size={'0.83rem'} color={'#ea003d'}/>
                    }
                />

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
                    <NotificationsIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                </IconButton>
                <Button
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
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {dropdown.isOpen && <FilmsDropdown />}
                {dropdown.isOpenAlert && <AlertDropdown />}
                {dropdown.isOpenSubscribe && <SubscribeDropdown />}
                {dropdown.isOpenUser && <UserDropdown />}
            </Box>   
            </>   
    )
})
