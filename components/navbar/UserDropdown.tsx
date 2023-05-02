import { Box, Button, Stack, Typography } from '@mui/material';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import CelebrationIcon from '@mui/icons-material/Celebration';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ResetTvIcon from '@mui/icons-material/ResetTv';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { observer } from 'mobx-react-lite';
import dropdown from '@/store/Dropdown';
import React from 'react'
import Link from 'next/link';

const UserDropdown = observer(() => {
    return (
        <Box
            sx={{
                position: "absolute",
                zIndex: "1000",
                width: "1220px",
                margin: "0 auto",
                height: "340px",
                background: "#1f1b2e",
                top: "84px",
                borderTop: "1px solid rgba(255,255,255,.2)",
                borderRadius: "0px 0px 20px 20px",
                padding: "30px 30px",
                display: "flex",
                gap: "100px"
            }}
            onMouseLeave={() => { dropdown.changeHandlerUser(false) }}
        >
            <Box sx={{
                display: "flex",
                alignItems: "flex",
                gap: "30px"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "20px",
                }}>
                    <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            padding: "15px",
                            background: "#312b45",
                            width: "180px",
                            height: "120px",
                            borderRadius: "10px"
                        }}>
                            <SubscriptionsIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "16px",
                                color: "white",
                                fontWeight: "700"
                            }}>Покупки</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            padding: "15px",
                            background: "#312b45",
                            width: "180px",
                            height: "120px",
                            borderRadius: "10px"
                        }}>
                            <BookmarkIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "16px",
                                color: "white",
                                fontWeight: "700"
                            }}>Смотреть позже</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            padding: "15px",
                            background: "#312b45",
                            width: "180px",
                            height: "120px",
                            borderRadius: "10px"
                        }}>
                            <HistoryIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "16px",
                                color: "white",
                                fontWeight: "700"
                            }}>История Просмотров</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            padding: "15px",
                            background: "#312b45",
                            width: "180px",
                            height: "120px",
                            borderRadius: "10px"
                        }}>
                            <CelebrationIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "16px",
                                color: "white",
                                fontWeight: "700"
                            }}>Подписки</Typography>
                        </Box>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            padding: "15px",
                            background: "#312b45",
                            width: "180px",
                            height: "120px",
                            borderRadius: "10px"
                        }}>
                            <WorkspacePremiumIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "16px",
                                color: "white",
                                fontWeight: "700"
                            }}>Актвация <br />
                                сертификата</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            padding: "15px",
                            background: "#312b45",
                            width: "180px",
                            height: "120px",
                            borderRadius: "10px"
                        }}>
                            <ResetTvIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "16px",
                                color: "white",
                                fontWeight: "700"
                            }}>Вход по коду</Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            padding: "15px",
                            background: "#312b45",
                            width: "180px",
                            height: "120px",
                            borderRadius: "10px"
                        }}>
                            <CreditCardIcon sx={{ color: "rgba(255,255,255,.48)" }} />
                            <Typography sx={{
                                fontSize: "16px",
                                color: "white",
                                fontWeight: "700"
                            }}>Способы оплаты</Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{
                    borderLeft: "1px solid rgba(255,255,255,.2)",
                    padding: "20px",
                    position: "relative"
                }}>
                    <Link href="/profile"> <Button
                        sx={{
                            color: "white",
                            fontSize: "14px",
                            background: "#00b0ff",
                            textTransform: "capitalize",
                            height: "36px",
                            width: "300px",
                            borderRadius: "8px",
                            fontWeight: "600"
                        }}
                    >
                        Войти или зарегистрироваться
                    </Button>
                    </Link>
                    <Box sx={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        bottom: "0"
                    }}>
                        <Link href="https://www.ivi.ru/profile/settings" style={{ color: "white" }}>Настройки</Link>
                        <Link href="https://ask.ivi.ru/?_gl=1*e80bdd*_ga*MTc1MTU2NTg0LjE2ODEzODYwOTI.*_ga_GETQ4387MJ*MTY4Mjk0OTcwNS4yMi4xLjE2ODI5NjgwMjQuNTguMC4w" style={{ color: "white" }}>Помощь</Link>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
})
export default UserDropdown;
