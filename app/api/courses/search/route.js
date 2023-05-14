import { NextResponse } from "next/server";
import Courses from "../data.json";

export async function GET(request){
    const { searchParams } = new URL(request.url );
    console.log(request.url);
    return NextResponse.json(Courses)
}