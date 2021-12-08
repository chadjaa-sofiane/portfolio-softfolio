import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_STRING.trim());
    console.log("connecting with db is successfuly ");
  } catch (e) {
    console.error(`mongodb error : ${e.message}`);
  } 
};

export default dbConnect;
