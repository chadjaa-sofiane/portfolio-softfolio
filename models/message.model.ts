import { Schema, model, models } from "mongoose";

const messageSchema = new Schema({
  name: {
    type: String,
    required: [true,"name must be populated"],
    min: [4, "the name should has more than 4 character "],
  },
  email: {
    type: String,
    required: [true,"email must be populated"],
    validate: (v) => {
      return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
    },
  },
  subject: {
    type: String,
    required: [true,"subject must be populated"],
  },
  message: {
    type: String,
    required: [true,"message must be populated"],
  },
});

export default models.message || model("message", messageSchema);
