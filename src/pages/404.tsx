import Button from "@/components/buttons/CommonButton";
import NotFoundIcon from "@/components/svgs/NotFoundIcon";
import BlankLayout from "@/layouts/BlankLayout";
import { APP_ROUTES, NextPageWithLayout } from "@/utils";
import clsx from "clsx";
import React, { ReactElement } from "react";

const NotFound: NextPageWithLayout = () => {
  return (
    <BlankLayout>
      <div
        className={clsx(
          "w-[50%] h-full m-auto flex flex-col justify-center items-center"
        )}
      >
        <NotFoundIcon />
        <h2 className="mt-4 font-medium">Page Not Found</h2>
        <Button
          type="link"
          props={{ href: APP_ROUTES.HOME, className: "mt-8 border-black" }}
          label="Go home"
        />
      </div>
    </BlankLayout>
  );
};

export default NotFound;
