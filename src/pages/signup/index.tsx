import { LoginFormType } from "@/features/authentication/components/LoginForm";
import SignupForm, {
  SignupFormType,
} from "@/features/authentication/components/SignUpForm";
import { register } from "@/features/authentication/serivce";
import BlankLayout from "@/layouts/BlankLayout";
import { APP_ROUTES, NextPageWithLayout, ServerMessageType } from "@/utils";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";

const Signup: NextPageWithLayout = () => {
  const [serverMessage, setServerMessage] = useState<ServerMessageType>();
  const router = useRouter();
  const handleSubmit = async (data: SignupFormType) => {
    try {
      const res = await register(data);
      setServerMessage({ type: "success", message: "Register successfully!" });
      //   router.push(APP_ROUTES.HOME);
    } catch (error) {
      setServerMessage({ type: "error", message: "Wrong credentials" });
    }
  };

  return (
    <div className={clsx("h-full flex items-center justify-center")}>
      <div className="m-4 md:m-0 w-[500px] ">
        <div className={clsx("shadow-md m-4 md:m-0 border-form")}>
          <h2
            className={clsx(
              "p-4 uppercase font-medium text-center md:text-xl bg-[#f1f1f1]"
            )}
          >
            Sign up to FFW Movie
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
          <SignupForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};

export default Signup;
