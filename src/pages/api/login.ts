import { SERVER_STATUS_CODE } from "@/utils";
import { setCookie } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

const isAuth = (username?: string, password?: string) => {
  console.log("IS AUTH: ", username, password);

  return username === "admin" && password === "12345678";
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    console.log(JSON.stringify(req.body));

    if (isAuth(req.body?.username, req.body?.password)) {
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
