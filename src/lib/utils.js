import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
      if(connection.isConnected) {
          console.log("DB is already connected");
          return;
      }
      const db = await mongoose.connect(process.env.MONGO);
      connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};

