import { Box, Stack } from "@mui/material";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import CelebrationIcon from "@mui/icons-material/Celebration";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import React from "react";
import MyLink from "../../controls/navigation/myLink";
import MyButton from "../../controls/buttons/myButton";
import TileItem from "../../content/tileItem";
import MyText from "@/components/content/myText";
import { userStore } from "@/store/userStore";
import router from "next/router";
import { observer } from "mobx-react-lite";

const ProfileDropDownContent = observer(() => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex",
        gap: "30px",
        mt: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
          <TileItem
            text={"Покупки"}
            icon={<SubscriptionsIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
          />
          <TileItem
            text={"Смотреть позже"}
            icon={<BookmarkIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
          />
          <TileItem
            text={"История просмотров"}
            icon={<HistoryIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
          />
          <TileItem
            text={"Подписки"}
            icon={<CelebrationIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
          />
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
          <TileItem
            text={"Активация сертификата"}
            icon={
              <WorkspacePremiumIcon sx={{ color: "rgba(255,255,255,.48)" }} />
            }
          />
          <TileItem
            text={"Вход по коду"}
            icon={<ResetTvIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
          />
          <TileItem
            text={"Способы оплаты"}
            icon={<CreditCardIcon sx={{ color: "rgba(255,255,255,.48)" }} />}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          borderLeft: "1px solid rgba(255,255,255,.2)",
          padding: "20px",
          position: "relative",
        }}
      >
        <MyLink
          link="/profile"
          content={
            <MyButton
              color="#ea003d"
              text="Войти или зарегистрироваться"
              width="18rem"
            />
          }
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            bottom: "0",
          }}
        >
          <MyLink
            link={"https://www.ivi.ru/profile/settings"}
            content={<MyText text={"Настройки"} />}
          />
          <MyLink
            link={
              "https://ask.ivi.ru/?_gl=1*e80bdd*_ga*MTc1MTU2NTg0LjE2ODEzODYwOTI.*_ga_GETQ4387MJ*MTY4Mjk0OTcwNS4yMi4xLjE2ODI5NjgwMjQuNTguMC4w"
            }
            content={<MyText text={"Помощь"} />}
          />

          {/*                         <MyText text={userStore?.isAuth ? `Пользователь авторизован ${userStore?.user.email}` : 'Авторизуйтесь'}/>  
                      <MyButton text={userStore?.isAuth ? `Выход` : 'Вход'} func={
                            userStore?.isAuth ? () => userStore?.logout() : ()=> router.push('/profile')
                        } width='100%'/>  */}
        </Box>
      </Box>
    </Box>
  );
});
export default ProfileDropDownContent;
