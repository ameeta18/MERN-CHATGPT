import { connect , disconnect} from "mongoose";
export default async function connectToDatabase(){
    try {
        await connect(process.env.MONGODB_URL) // Connecting MongoDb database by cuurent procces of NodeJS
    } catch (error) {
        console.log(error)
        throw new Error("Could not Connect To MongoDB");
    }
}
async function disconnectFromDatabase() {
    try {
      await disconnect();
    } catch (error) {
      console.log(error);
      throw new Error("Could not Disconnect From MongoDB");
    }
  }

  export { connectToDatabase, disconnectFromDatabase }; 