import { Box, Button, Stack, Typography } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DevicesIcon from '@mui/icons-material/Devices';
import ExtensionOffIcon from '@mui/icons-material/ExtensionOff';
import React from 'react'
import DropdownSlider from './DropdownSlider';
import DropdownSliderToRight from './DropdownSliderToRight';
import Link from 'next/link';
import dropdown from '@/store/Dropdown';
import { observer } from 'mobx-react-lite';
import MyLink from '../navigation/myLink';
import MyButton from '../buttons/myButton';

const SubscribeDropdown = observer(() => {
    return (
        <Box sx={{
            position: "absolute",
            zIndex: "1000",
            width: "1220px",
            margin: "0 auto",
            height: "520px",
            background: "#1f1b2e",
            top: "84px",
            borderTop: "1px solid rgba(255,255,255,.2)",
            borderRadius: "0px 0px 20px 20px",
            padding: "30px 30px",
            display: "flex",
            gap: "100px"
        }}
            onMouseLeave={() => { dropdown.changeHandlerSubscribe(false) }}
        >
            <Box>
                <Typography sx={{
                    fontSize: "32px",
                    color: "white",
                    fontWeight: "700"
                }}>Подписка КиноМан</Typography>
                <Typography sx={{
                    fontSize: "16px",
                    color: "rgba(255,255,255,.48)"
                }}>Стоимость 2.99 $ в месяц, продление автоматическое</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "20px",
                    margin: "30px 0 30px 0"
                }}>
                    <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            padding: "15px",
                            background: "#312b45",
                            width: "220px",
                            height: "130px",
                            borderRadius: "10px"
                        }}>
                            <VideocamIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "18px",
                                color: "white",
                                fontWeight: "700"
                            }}>Новинки сериалов<br />
                                и фильмов</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                padding: "15px",
                                background: "#312b45",
                                width: "460px",
                                height: "130px",
                                borderRadius: "10px"
                            }}>
                            <CreateNewFolderIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "18px",
                                color: "white",
                                fontWeight: "700"
                            }}>Еженедельное пополнение каталога<br />
                                фильмами и сериалами со всего мира</Typography>
                        </Box>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                padding: "15px",
                                background: "#312b45",
                                width: "220px",
                                height: "130px",
                                borderRadius: "10px"
                            }}>
                            <ExtensionOffIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "18px",
                                color: "white",
                                fontWeight: "700"
                            }}>Фильмы и сериалы<br />
                                без рекламы</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                padding: "15px",
                                background: "#312b45",
                                width: "220px",
                                height: "130px",
                                borderRadius: "10px"
                            }}>
                            <DevicesIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "18px",
                                color: "white",
                                fontWeight: "700"
                            }}>Семейный аккаунт<br />
                                на 5 устройствах</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                padding: "15px",
                                background: "#312b45",
                                width: "220px",
                                height: "130px",
                                borderRadius: "10px"
                            }}>
                            <FileDownloadIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "18px",
                                color: "white",
                                fontWeight: "700"
                            }}>Загрузка на<br />
                                мобильные<br />
                                устройства</Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px"
                }}>
                    
                    <MyLink link='/subscribe' content={
                        <MyButton text='Попробовать 30 дней бесплатно' color='#ea003d'/>
                    }/>

                    <Typography sx={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,.48)"
                    }}>Отключить можно<br />
                        в любой момент</Typography>
                </Box>
            </Box>
            <Box sx={{ position: "relative" }}>
                <DropdownSlider />
                <DropdownSliderToRight />
                <Link style={{
                    textDecoration: "underline", color: "rgba(255,255,255,.48)",
                    position: "absolute", bottom: "20px", right: "0"
                }}
                    href="https://www.ivi.ru/profile/subscriptions">Другие подписки</Link>
            </Box>
        </Box>
    )
})
export default SubscribeDropdown
