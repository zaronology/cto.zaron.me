import { NextRequest, NextResponse } from "next/server";
import { strapiClient } from "@/lib/utils/strapi";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request.url).searchParams;
  const search = searchParams.get("search") || "";
  console.log("Search query:", search);

  try {
    const articles = strapiClient.collection("topics");
    const result = await articles.find({
      filters: { name: { $containsi: search } },
      populate: "*",
      pagination: { page: 1, pageSize: 5 },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
