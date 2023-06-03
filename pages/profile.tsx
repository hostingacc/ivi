import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import MyInput from '@/components/features/myInput';
import MyText from '@/components/content/myText';
import MyButton from '@/components/buttons/myButton';
import { userStore } from '@/store/userStore';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import useRequest from '@/hooks/useRequest';
import { useRouter } from 'next/router';

const profile = observer(() => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [login, setLogin] = useState<string>('');

    const Login = (login ,email, password) => {

        userStore.login(login, email, password)
   /*      userStore.getInfo() */
    }
    const register = (login ,email, password) => {
        userStore.register(login, email, password)
    }



 /*    const url = 'http://localhost:3006/users/info'
    const data = useRequest(url)
    console.log(data) */

    /* const google = () => {
        window.location.href = 'http://localhost:3006/auth/google';
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams)
        const accessToken = urlParams.get('access_token');
        if (accessToken) {
            console.log(accessToken)
        // The user successfully logged in with Google
        // Store the access token and use it to authenticate subsequent requests
        localStorage.setItem('access_token', accessToken);
        }
    }
    const vk= () => {

        fetch('https://api.vk.com/method/users.get?access_token=YOUR_ACCESS_TOKEN&v=5.131', {
        method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
        // Обработка данных
        console.log(data);
        });
    } */
 
 
    const router = useRouter();
    const { access_token } = router.query;

    console.log(access_token)



    return (
            <>
   


     
      {/*       <MyText text={userStore.isAuth ? `Пользователь авторизован ${userStore.user.email}` : 'Авторизуйтесь'}/> */}
            
        


            <MyText text={'логин'}/>
            <MyInput setState={setLogin} label={'login'}/>
            <MyInput setState={setEmail} label={'email'}/>
            <MyInput setState={setPassword} label={'password'}/>
           
            <MyButton text={'Вход'} func={() => Login(login ,email, password)}/>
            <MyButton text={'Регистрация'} func={() => register(login ,email, password)}/>

      {/* 
          <a href='http://localhost:3006/auth/google'>gooogle</a>  */}

           {/*  <MyButton func={google} text='google'/>
            <MyButton func={vk} text='vk'/> */}  
 {/*            <form action="http://localhost:3006/auth/google" method="get" encType="application/x-www-form-urlencoded">
            <input type="submit" value="Press to log in"/>
            </form> */}
            <form action="http://localhost:3006/auth/google" method="get">
            <input type="submit" value="Press to log in"/>
            </form> 
            </>
    )
});

export default profile
