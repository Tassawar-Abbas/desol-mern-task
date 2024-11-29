import mongoose from "mongoose";

const connectMongodb =async () => {
    try {
       await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb connected successfully")
    }
    catch (err) {
        console.log(err)
    }
}
export default connectMongodb;