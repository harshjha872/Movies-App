import mongoose from "mongoose";

const connectdb = (handler) => async (req, res) => {
  if (await mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(process.env.MONGO_URI);  //changed uri
  return handler(req, res);
};

export default connectdb;
