import connectMongodb from "@/mongodb";
import User from "./model";
import { NextResponse } from "next/server";

export async function Post(request) {
    const {email,password}= await request.json();
    await connectMongodb();
    await User.create({email,password})
    return NextResponse.json({message:"user created successfully",status:201}) 
}