import React from "react";
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

const Header = () => {
  const router = useRouter();
  const type =
    router.pathname === APP_ROUTES.LOGIN
      ? "login"
      : router.pathname === APP_ROUTES.SIGNUP
      ? "signup"
      : "unauth";

  return <HeaderView type={type} />;
};
export default Header;
