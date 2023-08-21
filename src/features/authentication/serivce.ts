import { API_PATH } from "@/utils";
import axios from "axios";
import { LoginFormType } from "./components/LoginForm";

export const login = async (data: LoginFormType) => {
  return axios.post(API_PATH.LOGIN, data);
};

export const logout = async () => {
  return axios.get(API_PATH.LOGOUT);
};
