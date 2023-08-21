import React, { memo } from "react";
import Logo from "../svgs/Logo";
import SearchIcon from "../svgs/SearchIcon";
import CSS from "./header.module.css";
import clsx from "clsx";
import Link from "next/link";
import Button from "../buttons/CommonButton";
import IconButton from "../buttons/IconButton";
import { APP_ROUTES } from "@/utils";
import AccountIcon from "../svgs/AccountIcon";
import LogoutIcon from "../svgs/LogoutIcon";

type Props = {
  type: "auth" | "unauth" | "login" | "signup";
};

const HeaderView = ({ type }: Props) => {
  const displayFuncButton = () => {
    switch (type) {
      case "auth":
        return (
          <IconButton type="link" props={{ href: APP_ROUTES.PROFILE }}>
            <AccountIcon />
          </IconButton>
        );
      case "login":
        return (
          <Button
            type="link"
            label="Sign up"
            props={{ href: APP_ROUTES.SIGNUP }}
          />
        );
      case "unauth":
        return (
          <IconButton type="button" props={{ onClick: () => {} }}>
            <LogoutIcon />
          </IconButton>
        );
      case "signup":
        return (
          <Button
            type="link"
            label="Log in"
            props={{ href: APP_ROUTES.LOGIN }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <header className={clsx(CSS.header)}>
      <div
        className={clsx(
          CSS.header,
          "flex items-center px-4 md:px-8 max-w-[1664px] m-auto"
        )}
      >
        <div className={clsx("flex-1")}>
          <IconButton
            type="link"
            props={{
              href: APP_ROUTES.HOME,
              className: clsx(
                CSS["logo-wrapper"],
                "inline-block",
                "align-middle",
                "py-0",
                "px-0"
              ),
            }}
          >
            <Logo />
          </IconButton>
        </div>
        <IconButton type="link" props={{ href: APP_ROUTES.RESULT }}>
          <SearchIcon />
        </IconButton>
        {displayFuncButton()}
      </div>
    </header>
  );
};
export default memo(HeaderView);
