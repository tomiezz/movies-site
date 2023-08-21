import LoginForm, {
  LoginFormType,
} from "@/features/authentication/components/LoginForm";
import BlankLayout from "@/layouts/BlankLayout";
import { NextPageWithLayout, ServerMessageType } from "@/utils";
import clsx from "clsx";
import React, { ReactElement, memo } from "react";
import CSS from "./login.module.css";

type Props = {
  serverMessage?: ServerMessageType;
  onSubmit?: (data: LoginFormType) => void;
};

const LoginPageView = ({ serverMessage, onSubmit }: Props) => {
  return (
    <div className={clsx(CSS.login)}>
      <div className={clsx(CSS["login-form-wrapper"], "m-4 md:m-0")}>
        <div className={clsx("shadow-md")}>
          <h2
            className={clsx(
              "p-4 uppercase font-medium text-center md:text-xl",
              CSS.loginFormHeader
            )}
          >
            Login to FFW Movie
          </h2>
          <h3
            className={clsx(
              "transition-all text-white h-0 leading-10 px-4 font-medium visible ",
              serverMessage && "h-10",
              serverMessage?.type === "error" && "bg-[#dc3545]",
              serverMessage?.type === "success" && "bg-[#2e7d32]"
            )}
          >
            {serverMessage?.message}
          </h3>
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default memo(LoginPageView);
