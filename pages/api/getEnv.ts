import { NextApiRequest, NextApiResponse } from "next";

const getMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET":
        res.send({
          envs: [
            process.env.MONGO_STRING,
            process.env.EMAIL_USER,
            process.env.EMAIL_PASS,
          ],
        });
        break;
      default:
        res.status(500);
        break;
    }
  } catch (e) {
    return res.status(400).json(e);
  }
};

export default getMessage;
