import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    vehicleModel: { type: String, required: true, unique: true },
    vehiclePrice: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    vehicleImages: [{ type: String }],
},
    { timestamps: true });

const Vehicle = mongoose.models.Vehicle || mongoose.model("Vehicle", userSchema);
export default Vehicle;