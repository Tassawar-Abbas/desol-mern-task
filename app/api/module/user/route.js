import connectMongodb from "@/mongodb";
import { NextResponse } from "next/server";
import User from "./user";

// POST handler for both creating and fetching a user
export async function POST(request) {
    let { email, password } = await request.json();
    let response;
    await connectMongodb();
    if (email, password) {
        await User.create({ email, password });
        response = { message: "User created successfully", status: 201 };
    }
    else {
        response = await User.findOne({ email });
    }
    return NextResponse.json({ response });
}
