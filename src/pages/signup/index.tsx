import SignupForm from "@/features/authentication/components/SignUpForm";
import BlankLayout from "@/layouts/BlankLayout";
import { NextPageWithLayout } from "@/utils";
import clsx from "clsx";
import React, { ReactElement } from "react";

const Signup: NextPageWithLayout = () => {
  return (
    <div className={clsx("h-full flex items-center justify-center")}>
      <div className="m-4 md:m-0 w-[500px] border-form">
        <SignupForm />
      </div>
    </div>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};

export default Signup;
