import IconButton from "@/components/buttons/IconButton";
import CloseIcon from "@/components/svgs/CloseIcon";
import clsx from "clsx";
import React, { memo } from "react";
import CSS from "./login-form.module.css";
import TextFiled from "@/components/form/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type LoginForm = {
  username: string;
  password: string;
};

const schemaValidation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      password: "",
      username: "",
    },
    reValidateMode: "onChange",
    resolver: yupResolver(schemaValidation),
  });

  const submitForm = (data: LoginForm) => console.log(data);

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
      <h3 className="text-white h-0 leading-10 px-4 font-medium visible bg-[#dc3545]">
        Wrong criterias
      </h3>

      <form onSubmit={handleSubmit(submitForm)} className="px-4 py-4 mt-2">
        <TextFiled
          clsName="mb-2"
          id="username"
          label="Username"
          {...register("username")}
          errorMessage={errors["username"]?.message}
        />
        <TextFiled
          id="password"
          type="password"
          label="Password"
          {...register("password")}
          errorMessage={errors["password"]?.message}
        />

        <button
          className={clsx(
            "font-medium m-auto mt-4  block uppercase text-center"
          )}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default memo(LoginForm);
