import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { movie } from "../models";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, layoutProps?: any) => ReactNode;
};

export type ServerMessageType = {
  type: "success" | "error";
  message?: string;
};

export type MovieType = Partial<typeof movie>;
