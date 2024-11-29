import connectMongodb from "@/mongodb";
import { NextResponse } from "next/server";
import User from "./user";

// POST handler for both creating and fetching a user
export async function POST(request) {
    const requestBody = await request.json();
    let response;
    await connectMongodb();
    if (requestBody.password) {
        const { email, password } = requestBody;
        await User.create({ email, password });
        response = { message: "User created successfully", status: 201 };
    }

    // Otherwise, fetch user by email
    const { email } = requestBody;
    response = await User.findOne({ email });
    return NextResponse.json({ response });
}
