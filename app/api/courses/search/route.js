import { NextResponse } from "next/server";
import Courses from "../data.json";

export async function GET(request){
    const { searchParams } = new URL(request.url );
    const query = searchParams.get("query");
    return NextResponse.json(Courses)
}