import { makeAutoObservable } from 'mobx';
import { User } from '@/components/interfaces/user';
import AuthService from '@/components/services/auth';
import axios from  'axios';
import { AuthResponce } from '@/components/interfaces/AuthResponse';

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

        console.log(this.user)
    }

    async login(login, email:string, password: string) {
        try{
            const response = await AuthService.login(login, email, password);
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)

        } catch (e:any) {
            console.log(e.response?.data?.message)
        }
    }
    async register(login, email:string, password: string) {
        try{
            const response = await AuthService.registration(login, email, password);
            localStorage.setItem('token', response.data.accessToken)
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
        try{
            const response = await axios.get<AuthResponce>('localhost:3006/auth/refresh', {withCredentials:true})

            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (e:any) {
            console.log(e.response?.data?.message)
        }
    }
}


export const userStore = new UserStore();