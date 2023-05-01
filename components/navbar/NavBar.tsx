import { Box, Button, IconButton, List, ListItem, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import FilmsDropdown from './FilmsDropdown';
import dropdown from '@/store/Dropdown';
import { observer } from 'mobx-react-lite';
import AlertDropdown from './AlertDropdown';
import SubscribeDropdown from './SubscribeDropdown';
import UserDropdown from './UserDropdown';

export const NavBar = observer(() => {

    return (
        <>
            <Box sx={{
                borderRadius: "20px 20px 0px 0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: dropdown.color,
                maxWidth: "1220px",
                margin: "0 auto",
                gap: "5vw",
                padding: "10px 0",
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
            }}
            >
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={"1vw"}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                    }}>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={85}
                            height={65}
                            style={{ background: "transparent" }}
                        />
                        <Link href="/"> <Typography sx={{
                            color: "white",
                            fontSize: "24px",
                            fontWeight: "700",
                            position: "absolute",
                            left: "40px",
                            bottom: "17px",
                            cursor: "pointer",
                            opacity: ".7",
                            "@media (max-width:420px)": {
                                fontSize: "20px",
                            }
                        }}>Кино<span style={{ color: "#00b0ff" }}>Ман</span></Typography></Link>
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
                        <ListItem
                            onMouseOver={() => { dropdown.changeHandler(false) }}>
                            <Typography sx={{
                                color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700", ":hover": {
                                    color: "white"
                                }
                            }}>
                                Что нового
                            </Typography>
                        </ListItem>
                        <ListItem
                            onMouseEnter={() => { dropdown.changeHandler(true) }}
                        >
                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700",
                                    ":hover": {
                                        color: "white"
                                    }
                                }}>
                                Фильмы
                            </Typography>
                        </ListItem>
                        <ListItem
                            onMouseEnter={() => { dropdown.changeHandler(true) }}
                        >
                            <Typography sx={{
                                color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700",
                                ":hover": {
                                    color: "white"
                                }
                            }}>
                                Сериалы
                            </Typography>
                        </ListItem>
                        <ListItem
                            onMouseEnter={() => { dropdown.changeHandler(true) }}
                        >
                            <Typography sx={{
                                color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700",
                                ":hover": {
                                    color: "white"
                                }
                            }}>
                                Мультфильмы
                            </Typography>
                        </ListItem>
                        <ListItem
                            onMouseOver={() => { dropdown.changeHandler(false) }}
                            onMouseEnter={() => { dropdown.changeHandlerSubscribe(false) }}
                        >
                            <Typography sx={{
                                color: "rgba(255,255,255,.48)", fontSize: "15px", fontWeight: "700",
                                ":hover": {
                                    color: "white"
                                }
                            }}>
                                ТВ-каналы
                            </Typography>
                        </ListItem>
                    </List>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={"1vw"}>
                    <Link href="/subscribe"> <Button
                        variant="contained"
                        sx={{
                            background: "#00b0ff",
                            width: "210px",
                            height: "30px",
                            borderRadius: "10px",
                            fontSize: "10px",
                            "@media (max-width:420px)": {
                                fontSize: "8px",
                                width: "150px",
                                height: "40px",
                            }

                        }}
                        onMouseOver={() => { dropdown.changeHandlerSubscribe(true) }}
                    >Смотреть 30 дней бесплатно</Button></Link>
                    <Button
                        startIcon={<SearchIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
                        sx={{
                            color: "rgba(255,255,255,.48)",
                            fontSize: "15px",
                            fontWeight: "700",
                            textTransform: "capitalize",
                            width: "70px",
                            height: "40px",
                            "@media (max-width:1200px)": {
                                display: "none"
                            }
                        }}
                        onMouseOver={() => { dropdown.changeHandlerAlert(false) }}
                        onMouseEnter={() => { dropdown.changeHandlerSubscribe(false) }}
                    >Поиск</Button>
                    <IconButton
                        sx={{
                            width: "20px",
                            height: "40px",
                            "@media (max-width:600px)": {
                                display: "none"
                            }
                        }}
                        onMouseOver={() => {
                            dropdown.changeHandlerUser(false)
                            dropdown.changeHandlerAlert(true)
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
                        onMouseOver={() => {
                            dropdown.changeHandlerAlert(false)
                            dropdown.changeHandlerUser(true)
                        }}
                    >
                        <PersonOutlineIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                    </Button>
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
