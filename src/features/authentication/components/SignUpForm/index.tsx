import IconButton from "@/components/buttons/IconButton";
import TextFiled from "@/components/form/TextField";
import TogglePwdIcon from "@/components/svgs/TogglePwdIcon";
import clsx from "clsx";
import React, { RefObject } from "react";

const SignupForm = () => {
  return (
    <div className={clsx("shadow-md m-4 md:m-0")}>
      <h2
        className={clsx(
          "p-4  uppercase font-medium text-center md:text-xl bg-[#f1f1f1]"
        )}
      >
        Sign up to FFW Movie
      </h2>

      <form className="px-4 py-4">
        <TextFiled clsName="mb-4" id="username" label="Username" />
        <TextFiled
          clsName="mb-4"
          id="password"
          label="Password"
          type="password"
        />

        <TextFiled
          clsName="mb-4"
          id="password"
          label="Confirm Password"
          type="password"
        />

        <button
          className={clsx(
            "font-medium mt-4  w-full block uppercase text-center"
          )}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
