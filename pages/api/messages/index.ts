import sendEmail from "@lib/functions/sendEmail";
import Message from "@models/message.model";
import dbConnect from "@util/dbConnect";
import fs from "fs";
import { join } from "path";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

const sendEmailToGuest = async (to: string, name: string) => {
  const html = await fs
    .readFileSync(join("emails", "welcome.html"), "utf-8")
    .replace("<!-- geust  -->", name);

  await sendEmail({
    body: "there is no body",
    subject: "I'm glade that you contact me.",
    to,
    text: "thank you for contact me dear geust",
    html,
  });
};

const getMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, body } = req;
    switch (method) {
      case "GET":
        const messages = await Message.find();
        res.status(200).json(messages);
        break;
      case "POST":
        // const newMessage = new Message(body);
        // const result = await newMessage.save();
        await sendEmailToGuest(body.email, body.name);
        res.status(200).json({ message: "send message successfuly" });
        break;
      default:
        res.status(500);
        break;
    }
  } catch (e) {
    console.log(e);

    return res.status(400).json(e);
  }
};

export default getMessage;
