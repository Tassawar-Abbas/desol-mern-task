import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

let User=mongoose.model.Users|| mongoose.model("User", userSchema);
export default User;