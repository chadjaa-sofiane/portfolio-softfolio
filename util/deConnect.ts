import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState) {
    return;
  }
  await mongoose
    .connect(process.env.MONGO_STRING)
    .then(() => console.log("connecting with db is successfuly "))
    .catch(() => console.log("connecting with db is failed !!!!"));
};

export default dbConnect;
