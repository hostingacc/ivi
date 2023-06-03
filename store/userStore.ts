import { makeAutoObservable } from 'mobx';
import { User } from '@/components/interfaces/user';
import AuthService from '@/components/services/auth';
import axios from  'axios';
import { AuthResponse } from '@/components/interfaces/AuthResponse';

class UserStore{
    user = {} as User;
    isAuth = false;

 

    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool:boolean){
        this.isAuth = bool;
    }

    setUser(user: User){
        this.user = user

    }

    async login(login, email:string, password: string) {
        try{
            const response = await AuthService.login(login, email, password);
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            this.setAuth(true);
            this.setUser(response.data.user)

        } catch (e:any) {
            console.log(e.response?.data?.message)
        }
    }
    async googleLogin() {
        try{
            const response = await AuthService.googleLogin();
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            this.setAuth(true);
            this.setUser(response.data.user)
            console.log(response)

        } catch (e:any) {
            console.log(e.response?.data?.message)
        }
    }
    async register(login, email:string, password: string) {
        try{
            const response = await AuthService.registration(login, email, password);
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e:any) {
            console.log(e.response?.data?.message)
        }
    }
    async logout() {
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token')
            this.setAuth(false);
            this.setUser({} as User)
        } catch (e:any) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth() {
        const token = localStorage.getItem('refreshToken');
        try{
            const response = await axios.get<AuthResponse>('http://localhost:3006/users/info', {
            withCredentials:true,
            
            headers: {
                Authorization: `Bearer ${token}`
            }},
            )

   
            
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e:any) {

            console.log(e.response?.data?.message)
        }
    }
}


export const userStore = new UserStore();