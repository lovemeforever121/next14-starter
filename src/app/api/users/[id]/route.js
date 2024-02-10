import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    connectToDb();
    const users = await User.findById(id);
    return NextResponse.json(users);
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
}
