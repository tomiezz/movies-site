import { API_PATH } from "@/utils";
import axios from "axios";
import { LoginFormType } from "./components/LoginForm";
import { SignupFormType } from "./components/SignUpForm";

export const login = async (data: LoginFormType) => {
  return axios.post(API_PATH.LOGIN, data);
};

export const logout = async () => {
  return axios.get(API_PATH.LOGOUT);
};

export const register = async (data: SignupFormType) => {
  return axios.post(API_PATH.REGISTER, data);
};
