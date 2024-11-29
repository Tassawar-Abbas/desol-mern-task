import connectMongodb from "@/mongodb";
import { NextResponse } from "next/server";
import Car from "./car";

// POST handler for both creating and fetching a user
export async function POST(request) {
    const requestBody = await request.json();
    let response;
    await connectMongodb();
    if (requestBody) {
        const { vehiclePrice, vehicleModel, phone, city } = requestBody;
        await Car.create({ vehiclePrice, vehicleModel, phone, city,vehicleImages });
        response = { message: "car record created successfully", status: 201 };
        return NextResponse.json({ response });
    }
    else {
        return NextResponse.json({ message: "enter all required field data" });
    }

}
