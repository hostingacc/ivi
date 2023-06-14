import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  Container,
} from "@mui/material";
/* import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"; */
import { observer } from "mobx-react-lite";
import logo from "../../public/logo/reposition_iviLogoPlateRounded.svg";
import { useTranslation } from "next-i18next";
import MyLink from "../controls/navigation/myLink";
import MyButton from "../controls/buttons/myButton";
import DropDownsList from "./dropDownsList";
import { dropdownStore } from "@/store/DropdownStore";
import { useRouter } from "next/router";

interface HeaderProps {
  store: any;
  changeTo: string;
}

const Header = observer(({ store, changeTo }: HeaderProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Box
      component="header"
      sx={{
        pt: "0.8rem",
        position: "relative",
        width: "100%",
        zIndex: 100,
        "@media (max-width:600px)": {
          justifyContent: "space-between",
          marginLeft: "10px",
          marginRight: "30px",
        },
      }}
    >
      <Box
        sx={{
          zIndex: 3,
          width: "100%",
          top: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"1vw"}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <MyLink link={"/"} content={logo()} />
          </Box>
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "1.6rem",
              "& .css-1p823my-MuiListItem-root": {
                width: "auto",
                padding: "8px 10px",
                cursor: "pointer",
              },
              "@media (max-width:1200px)": {
                display: "none",
              },
            }}
          >
            <ListItem
              sx={{ width: "unset" }}
              onMouseOver={() => {
                dropdownStore.setShowDropdown("movies", true);
              }}
            >
              <MyLink
                link={"/movies/all"}
                fontWeight={700}
                content={t("Новинки")}
              />
            </ListItem>
            <ListItem
              onMouseOver={() => {
                dropdownStore.setShowDropdown("movies", true);
              }}
            >
              <MyLink
                link={"/movies/"}
                fontWeight={700}
                content={t("Фильмы")}
              />
            </ListItem>
            <ListItem
              onMouseOver={() => {
                dropdownStore.setShowDropdown("movies", true);
              }}
            >
              <MyLink
                link={"/movies/all"}
                fontWeight={700}
                content={t("Сериалы")}
              />
            </ListItem>
            <ListItem>
              <MyLink
                link={"/movies/all"}
                fontWeight={700}
                content={t("Мультфильмы")}
              />
            </ListItem>
          </List>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"1vw"}
        >
          <Box
            onMouseOver={() => {
              dropdownStore.setShowDropdown("subscribe", true);
            }}
          >
            <MyLink
              link="/subscribe"
              content={
                <MyButton
                  text={"Смотреть 30 дней бесплатно"}
                  width={"13.3rem"}
                  size={"12px"}
                  color={"#ea003d"}
                />
              }
            />
          </Box>
          <Button
       /*      startIcon={<SearchIcon sx={{ color: "rgba(255,255,255,.48)" }} />} */
            sx={{
              color: "rgba(255,255,255,.48)",
              fontSize: "15px",
              fontWeight: "700",
              textTransform: "capitalize",
              width: "90px",
              height: "40px",
              "@media (max-width:1200px)": {
                display: "none",
              },
            }}
          >
            {t("Поиск")}
          </Button>
          <IconButton
            sx={{
              width: "40px",
              height: "40px",
              "@media (max-width:600px)": {
                display: "none",
              },
            }}
          >
          {/*   <NotificationsIcon
              onMouseOver={() => {
                dropdownStore.setShowDropdown("alert", true);
              }}
              sx={{ color: "rgba(255,255,255,.48)", fontSize: "30px" }}
            /> */}
          </IconButton>
          <Button
            onClick={() => router.push("/profile")}
            onMouseOver={() => {
              dropdownStore.setShowDropdown("profile", true);
            }}
            variant="outlined"
            sx={{
              width: "48px",
              height: "48px",
              minWidth: "unset",
              border: "1.5px solid rgba(255,255,255,.48)",
              borderRadius: "10px",
              ":hover": {
                border: "1.5px solid white",
              },
              "@media (max-width:600px)": {
                display: "none",
              },
            }}
          >
          {/*   <PersonOutlineIcon
              sx={{ color: "rgba(255,255,255,.48)", fontSize: "30px" }}
            /> */}
          </Button>
          <MyButton
            text={t("change-locale")}
            func={() => store.onToggleLanguageClick(changeTo)}
            width="10px"
          />
        </Stack>
      </Box>
      <DropDownsList />
    </Box>
  );
});

export default Header;
