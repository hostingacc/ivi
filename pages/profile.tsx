import React, { useState } from "react";
import { Box } from "@mui/material";
import MyInput from "@/components/controls/myInput";
import MyText from "@/components/content/myText";
import MyButton from "@/components/controls/buttons/myButton";
import { userStore } from "@/store/userStore";
import { observer } from "mobx-react-lite";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const profile = observer(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<string>("");

  const Login = (login, email, password) => {
    userStore.login(login, email, password);
  };
  const register = (login, email, password) => {
    userStore.register(login, email, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column ",
        m: "12rem auto",
        alignItems: "center",
        justifyContent: "center",
        width: "400px",
        "@media (max-width:423px)": {
          width: "100%",
        },
      }}
    >
      <Box>
        <MyText
          color="#fff"
          text={
            userStore.isAuth
              ? `Пользователь авторизован ${userStore.user.email}`
              : "Авторизуйтесь"
          }
        />
      </Box>

      <Box sx={{ mt: "2rem", width: "100%" }}>
        <MyInput setState={setLogin} label={"login"} />
      </Box>
      <Box sx={{ mt: "2rem", width: "100%" }}>
        <MyInput setState={setEmail} label={"email"} />
      </Box>
      <Box sx={{ mt: "2rem", width: "100%" }}>
        <MyInput setState={setPassword} label={"password"} />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ width: "100%", mt: "2rem" }}
      >
        <MyButton
          text={"Вход"}
          func={() => Login(login, email, password)}
          hoverColor="#3e3659"
        />
        <MyButton
          text={"Регистрация"}
          func={() => register(login, email, password)}
          hoverColor="#3e3659"
        />
      </Box>
    </Box>
  );
});

export default profile;

export async function getServerSideProps({ req, res, locale }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ru", ["common"])),
    },
  };
}
