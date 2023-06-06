import MyLink from "./myLink";
import { BottomNavigationAction } from "@mui/material";

const MyBottomNavigation = ({ link, label, value, icon }) => {
  return (
    <MyLink
      link={link}
      content={
        <BottomNavigationAction
          showLabel
          label={label}
          value={value}
          icon={icon}
          sx={{
            color: "white",
            "&.Mui-focusVisible": {
              color: "white",
            },
          }}
        />
      }
    />
  );
};

export default MyBottomNavigation;
