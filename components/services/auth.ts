import $api from "../http";
import {AxiosResponse} from 'axios'; 
import { AuthResponse } from "../interfaces/AuthResponse";

export default class AuthService {
    static async login(login:string, email:string ,password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('auth/signin', {login, email,  password})
    }
    static async googleLogin(): Promise<AxiosResponse<AuthResponse>> {
        return $api.get<AuthResponse>('auth/google');
      }

    static async registration(login:string, email:string , password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>('auth/signup', {login, email,  password})
    }
    static async logout(): Promise<void>{
        return $api.post('auth/logout')
    }

}