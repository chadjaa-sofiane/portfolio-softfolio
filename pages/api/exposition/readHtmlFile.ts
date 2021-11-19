import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync } from "fs";
import path from "path";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.json({ error: "this api only accept get requests" });
  if (!req.query?.name)
    return res
      .status(400)
      .json({ error: "query name should be populated in the link" });
  try {
    const html = readFileSync(
      `${path.resolve()}/public/css_exposition/templates/${
        req.query?.name
      }.html`,
      {
        encoding: "utf-8",
      }
    );
    if (!html) return res.status(404).json({ error: "there is no html" });
    res.json({ html });
  } catch (e) {
    res.status(404).json(e.message);
  }
};
