import React, { memo, useCallback } from "react";
import Logo from "../svgs/Logo";
import SearchIcon from "../svgs/SearchIcon";
import CSS from "./header.module.css";
import clsx from "clsx";
import Link from "next/link";
import Button from "../buttons/CommonButton";
import IconButton from "../buttons/IconButton";
import { APP_ROUTES } from "@/utils";
import HeaderView from "./HeaderView";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { logout } from "@/features/authentication/serivce";
import * as cookieLib from "cookie";

type Props = {
  user?: string;
};

const Header = ({ user }: Props) => {
  const router = useRouter();

  const type =
    router.pathname === APP_ROUTES.LOGIN
      ? "login"
      : router.pathname === APP_ROUTES.SIGNUP
      ? "signup"
      : router.pathname === APP_ROUTES.PROFILE
      ? "private"
      : user
      ? "auth"
      : "unauth";

  const showSearch = router.pathname !== APP_ROUTES.RESULT;

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      router.push(APP_ROUTES.LOGIN);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderView showSearch={showSearch} type={type} onLogout={handleLogout} />
  );
};

export default memo(Header);
