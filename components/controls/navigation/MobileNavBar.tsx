import BottomNavigation from "@mui/material/BottomNavigation";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HouseIcon from "@mui/icons-material/House";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { observer } from "mobx-react-lite";
import navbar from "../../../store/MobileNavBar";
import MyBottomNavigation from "./myBottomNavigationAction";

const MobileNavBar = observer(() => {
  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        display: "none",
        alignItems: "center",
        width: "100%",
        bottom: "0",
        zIndex: "100",

        background: "rgba(31,27,46,.88)",
        backdropFilter: "blur(8px)",
        ".css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected":
          {
            color: "white",
          },
        ".css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root": {
          padding: "0",
        },
        ".css-118p9r0-MuiButtonBase-root-MuiBottomNavigationAction-root": {
          paddingX: "0",
        },
        "@media (max-width:1200px)": {
          display: "flex",
        },
      }}
      value={navbar.value}
      onChange={(e, newValue) => navbar.handleChange(e, newValue)}
    >
      <MyBottomNavigation
        link="/"
        label="Домой"
        value="домой"
        icon={<HouseIcon sx={{ fontSize: "30" }} />}
      />
      <MyBottomNavigation
        link="/movies"
        label="Каталог"
        value="каталог"
        icon={<OndemandVideoIcon sx={{ fontSize: "30" }} />}
      />
      <MyBottomNavigation
        link="/"
        label="Поиск"
        value="поиск"
        icon={<SearchIcon sx={{ fontSize: "30" }} />}
      />
      <MyBottomNavigation
        link="/profile"
        label="Профиль"
        value="профиль"
        icon={<PersonOutlineIcon sx={{ fontSize: "30" }} />}
      />
      <MyBottomNavigation
        link="/"
        label="Ещё"
        value="ещё"
        icon={<MoreHorizIcon sx={{ fontSize: "30" }} />}
      />
    </BottomNavigation>
  );
});

export default MobileNavBar;
