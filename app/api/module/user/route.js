import connectMongodb from "@/mongodb";
import { NextResponse } from "next/server";
import User from "./user";

export async function POST(request) {
    const {email,password}= await request.json();
    await connectMongodb();
    await User.create({email,password})
    return NextResponse.json({message:"user created successfully",status:201}) 
}