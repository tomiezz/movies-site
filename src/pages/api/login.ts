import { AccountType, SERVER_STATUS_CODE } from "@/utils";
import { setCookie } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { accounts } from "./register";

const isAuth = (accounts: AccountType[], formBody: any) => {
  return accounts.find(
    (item) =>
      item.username === formBody?.username &&
      item.password === formBody?.password
  );
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log("ACCOUNT:", accounts);

    if (isAuth(accounts, req.body)) {
      setCookie(res, "auth", "true", {
        path: "/",
        maxAge: 60 * 60 * 24,
        httpOnly: true,
      });

      res.status(SERVER_STATUS_CODE.SUCCESS).end();
    } else {
      res
        .status(SERVER_STATUS_CODE.UNAUTH)
        .json({ message: "Wrong username or password" });
    }
  } else {
    res.status(SERVER_STATUS_CODE.UNAUTH).send({ error: "Wrong method" });
  }
}
