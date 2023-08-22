import { SERVER_STATUS_CODE } from "@/utils";
import { allMovies } from "@/utils/models";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const result = allMovies.filter((item) =>
      item.title.toLowerCase().includes(String(req.body?.s).toLowerCase())
    );

    res.status(SERVER_STATUS_CODE.SUCCESS).json({
      data: result,
    });
  } else {
    res.status(SERVER_STATUS_CODE.UNAUTH).send({ error: "Wrong method" });
  }
}
