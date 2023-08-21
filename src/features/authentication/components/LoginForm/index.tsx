import IconButton from "@/components/buttons/IconButton";
import CloseIcon from "@/components/svgs/CloseIcon";
import clsx from "clsx";
import React, { memo } from "react";
import TextFiled from "@/components/form/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export type LoginFormType = {
  username: string;
  password: string;
};

const schemaValidation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

type LoginFormProps = {
  onSubmit?: (data: LoginFormType) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: {
      password: "",
      username: "",
    },
    reValidateMode: "onChange",
    resolver: yupResolver(schemaValidation),
  });

  const submitForm = (data: LoginFormType) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
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
        className={clsx("font-medium m-auto mt-4  block uppercase text-center")}
      >
        Log in
      </button>
    </form>
  );
};

export default memo(LoginForm);
