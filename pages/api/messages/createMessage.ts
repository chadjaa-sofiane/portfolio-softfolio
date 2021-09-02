import Message from "@models/message.model";

export default async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const addMessage = await newMessage.save();
    console.log(addMessage);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
