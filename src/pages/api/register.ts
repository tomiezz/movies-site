import { AccountType, SERVER_STATUS_CODE } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    accounts = [{ username: req.body?.username, password: req.body?.password }];

    res.status(SERVER_STATUS_CODE.SUCCESS).end();
  } else {
    res.status(SERVER_STATUS_CODE.UNAUTH).send({ error: "Wrong method" });
  }
}

export let accounts: AccountType[] = [
  { username: "admin", password: "12345678" },
];
