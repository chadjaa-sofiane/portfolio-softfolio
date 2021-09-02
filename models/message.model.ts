import { Schema, model, models } from "mongoose";

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    min: [4, "the name should has more than 4 character "],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (v) => {
      return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
    },
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default models.message || model("message", messageSchema);
