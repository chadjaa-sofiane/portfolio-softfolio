import Message from "@models/message.model";
import { NextApiRequest, NextApiResponse } from "next";

//http://localhost:3000/api/messages

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, body } = req;

    switch (method) {
      case "GET":
        const messages = await Message.find();
        res.status(200).json(messages);
        break;
      case "POST":
        const newMessage = new Message(body);
        const result = await newMessage.save();
        res.status(200).json(result);
        break;
      default:
        res.status(500);
        break;
    }
  } catch (e) {
    return res.status(400).json(e);
  }
};
