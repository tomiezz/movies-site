import LoginForm from "@/features/authentication/components/LoginForm";
import BlankLayout from "@/layouts/BlankLayout";
import { NextPageWithLayout } from "@/utils";
import clsx from "clsx";
import React, { ReactElement } from "react";
import CSS from "./login.module.css";

const Login: NextPageWithLayout = () => {
  return (
    <div className={clsx(CSS.login)}>
      <div className={clsx(CSS["login-form-wrapper"], "m-4 md:m-0")}>
        <LoginForm />
      </div>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};

export default Login;
