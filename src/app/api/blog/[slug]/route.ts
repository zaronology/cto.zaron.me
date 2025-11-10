import { NextRequest, NextResponse } from "next/server";
import { strapiClient } from "@/lib/utils/strapi";

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const articles = strapiClient.collection("articles");
    const result = await articles.find({
      filters: { slug: { $eq: slug } },
      populate: "*",
      pagination: { page: 1, pageSize: 1 },
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
