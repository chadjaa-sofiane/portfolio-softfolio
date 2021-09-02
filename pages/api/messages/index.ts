import Message from "@models/message.model";

export default async (req, res) => {
  try {
    const messages = await Message.find();
    return res.status(200).json(messages);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
