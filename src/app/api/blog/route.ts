import { NextRequest, NextResponse } from "next/server";
import { strapiClient } from "@/lib/utils/strapi";

export async function GET(request: NextRequest) {
  const searchParams = new URL(request?.url).searchParams;
  const topicSlug = searchParams.get("topic") || "";
  console.log("Topic slug:", topicSlug);
  try {
    const articles = strapiClient.collection("articles");
    const result = await articles.find({
      sort: "createdAt:asc",
      fields: ["id", "slug", "title", "description", "publishedAt", "updatedAt"],
      filters: topicSlug
        ? {
            topics: {
              slug: { $eq: topicSlug },
            },
          }
        : undefined,
      populate: {
        author: { fields: ["id", "name"], populate: { avatar: true } },
        category: { fields: ["id", "name", "slug"] },
        cover: true,
        topics: true,
      },
    });
    console.log("Fetched articles:", result);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
