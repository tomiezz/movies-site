import LoginForm, {
  LoginFormType,
} from "@/features/authentication/components/LoginForm";
import BlankLayout from "@/layouts/BlankLayout";
import { APP_ROUTES, NextPageWithLayout, ServerMessageType } from "@/utils";
import clsx from "clsx";
import React, { ReactElement, useState } from "react";
import CSS from "./login.module.css";
import LoginPageView from "./LoginPageView";
import { login } from "@/features/authentication/serivce";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

const Login: NextPageWithLayout = () => {
  const [serverMessage, setServerMessage] = useState<ServerMessageType>();
  const router = useRouter();

  const handleSubmit = async (data: LoginFormType) => {
    try {
      const res = await login(data);
      //   setServerMessage({ type: "success", message: "Logged in" });
      router.push(APP_ROUTES.HOME);
    } catch (error) {
      setServerMessage({ type: "error", message: "Wrong credentials" });
    }
  };

  return (
    <LoginPageView serverMessage={serverMessage} onSubmit={handleSubmit} />
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};

export default Login;
