import { Box, Typography } from "@mui/material";
/* import NotificationsIcon from "@mui/icons-material/Notifications"; */
import React from "react";
import { observer } from "mobx-react-lite";

const AlertDropdownContent = observer(() => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        mt: "5rem",
      }}
    >
{/*       <NotificationsIcon
        sx={{ color: "rgba(255,255,255,.48)", fontSize: "60px" }}
      /> */}
      <Typography sx={{ color: "rgba(255,255,255,.48)" }}>
        Здесь появляются только важные сообщения
      </Typography>
    </Box>
  );
});

export default AlertDropdownContent;
