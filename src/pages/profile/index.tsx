import Record from "@/components/Record";
import Button from "@/components/buttons/CommonButton";
import AccountIcon from "@/components/svgs/AccountIcon";
import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/utils";
import React, { ReactElement } from "react";
import CSS from "./profile.module.css";
import clsx from "clsx";

type Props = {
  isEditting?: boolean;
};

const ProfilePage: NextPageWithLayout = ({ isEditting = false }: Props) => {
  return (
    <div className={clsx("p-4 h-full md:max-w-[1600px]", CSS.profile)}>
      <div className="md:border  md:w-[500px] md:shadow-md m-auto">
        <h1 className="md:p-4 text-xl  uppercase font-medium md:text-center md:text-xl md:bg-[#f1f1f1]">
          Profile
        </h1>
        <div className="md:p-4">
          <div className="flex items-center my-4">
            <AccountIcon color="gray" width={36} height={36} />
            <h2 className="ml-2">Tomiez</h2>
          </div>
          <Record className="mb-2" label="Account ID" content="13061996" />
          <Record className="mb-2" label="Enter Date" content="20/08/2023" />

          <Record className="mb-2" label="DoB" content="13/06/1996" />
          <Record className="mb-2" label="Country" content="Vietnam" />
          <Record className="mb-2" label="City" content="Hanoi" />
          <Record className="mb-2" label="Language" content="English" />

          <Record
            className="mb-2"
            label="Preferences"
            content="Action, Romantic"
          />
          <div className="flex justify-start mt-8">
            {isEditting ? (
              <>
                <Button
                  type="button"
                  props={{ onClick: () => {}, className: "!border-black mr-2" }}
                >
                  Save
                </Button>
                <Button
                  type="button"
                  props={{ onClick: () => {}, className: "!border-black" }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                type="button"
                props={{ onClick: () => {}, className: "!border-black" }}
              >
                Edit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ProfilePage;
