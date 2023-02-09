import mongoose from "mongoose";
const connection = {};
const connectDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Already connected");
      return;
    }
    if (mongoose.connections.length > 0) {
      connection.isConnected = mongoose.connections[0].readyState;
      if (connection.isConnected === 1) {
        console.log("Use the previous connection");
        return;
      }
      await mongoose.disconnect();
    }

    const db = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
    });
    console.log("Connected Successfully");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error.message);
  }
};

const disconnectDb = async () => {
  try {
    if (connection.isConnected) {
      if (process.env.NODE_ENV === "production") {
        await mongoose.disconnect();
        connectDb.isConnected = false;
      } else {
        console.log("in development mode. Not disconnecting");
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};
const db = { connectDb, disconnectDb };
export default db;
