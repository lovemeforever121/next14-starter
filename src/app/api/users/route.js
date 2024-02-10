import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    connectToDb();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
}
