import IconButton from "@/components/buttons/IconButton";
import TextFiled from "@/components/form/TextField";
import TogglePwdIcon from "@/components/svgs/TogglePwdIcon";
import clsx from "clsx";
import React, { RefObject } from "react";
import { useForm } from "react-hook-form";
import { LoginFormType } from "../LoginForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type SignupFormType = {
  username: string;
  password: string;
  confirmPassword: string;
};

const schemaValidation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Confirm password must match to paswword"),
});

type SignupFormProps = {
  onSubmit?: (data: SignupFormType) => void;
};

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    defaultValues: {
      password: "",
      username: "",
    },
    reValidateMode: "onChange",
    resolver: yupResolver(schemaValidation),
  });

  const submitForm = (data: LoginFormType) => {
    console.log(data);

    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="px-4 py-4">
      <TextFiled
        clsName="mb-4"
        id="username"
        label="Username"
        {...register("username")}
        errorMessage={errors["username"]?.message}
      />
      <TextFiled
        clsName="mb-2"
        id="password"
        label="Password"
        type="password"
        autoComplete="new-password"
        {...register("password")}
        errorMessage={errors["password"]?.message}
      />

      <TextFiled
        clsName="mb-2"
        id="password"
        label="Confirm Password"
        type="password"
        autoComplete="new-password"
        {...register("confirmPassword")}
        errorMessage={errors["confirmPassword"]?.message}
      />

      <button
        className={clsx("font-medium mt-4  w-full block uppercase text-center")}
      >
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
