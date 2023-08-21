import { SERVER_STATUS_CODE, setCookie } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  setCookie(res, "auth", "true", {
    path: "/",
    maxAge: -1,
    httpOnly: true,
  });

  res.status(SERVER_STATUS_CODE.SUCCESS).end();
}
