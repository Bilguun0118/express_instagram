import mongoose from "mongoose";
export const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
    //     useCreateIndex: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true,
    }); 
    console.log(`MongoDB холбогдлоо : ${conn.connection.host}`);
}
