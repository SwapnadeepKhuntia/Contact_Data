import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set("strictQuery",false);

    const dbconnection = async () =>{
        try {
            const data = await mongoose.connect(process.env.MONGO_URI)
            console.log(`Database connection successfull ${data.connection.host}`);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
}
export default dbconnection;