import { makeAutoObservable } from "mobx";
import { User } from "@/interfaces/user";
import AuthService from "@/services/auth";
import axios from "axios";
import { AuthResponse } from "@/interfaces/AuthResponse";

class UserStore {
  user = {} as User;
  isAuth = false;

  envUrl = process.env.NEXT_PUBLIC_API_URL;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: User) {
    this.user = user;
  }

  async login(login, email: string, password: string) {
    try {
      const response = await AuthService.login(login, email, password);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      console.log(response.data);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  async googleLogin() {
    try {
      const response = await AuthService.googleLogin();
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  async register(login, email: string, password: string) {
    try {
      const response = await AuthService.registration(login, email, password);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  async logout() {
    try {
      //  const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as User);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get<AuthResponse>(
        `${this.envUrl}:3006/users/info`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        this.setAuth(true);
        this.setUser(response.data as unknown as User);
      } else {
        this.refresh();
      }
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
  async refresh() {
    const token = localStorage.getItem("refreshToken");
    try {
      const response = await axios.get<AuthResponse>(
        `${this.envUrl}:3006/auth/refresh`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
}

export const userStore = new UserStore();
