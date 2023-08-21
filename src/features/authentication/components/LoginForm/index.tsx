import IconButton from "@/components/buttons/IconButton";
import CloseIcon from "@/components/svgs/CloseIcon";
import clsx from "clsx";
import React, { memo } from "react";
import CSS from "./login-form.module.css";
import TextFiled from "@/components/form/TextField";

const LoginForm = () => {
  return (
    <div className={clsx("shadow-md")}>
      <h2
        className={clsx(
          "p-4  uppercase font-medium text-center md:text-xl",
          CSS.loginFormHeader
        )}
      >
        Login to FFW Movie
      </h2>

      <form className="px-4 py-4">
        <TextFiled clsName="mb-4" id="username" label="Username" />
        <TextFiled id="password" label="Password" />

        <button
          className={clsx(
            "font-medium mt-4  w-full block uppercase text-center"
          )}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default memo(LoginForm);
