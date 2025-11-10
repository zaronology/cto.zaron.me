import { Article } from "@/lib/Models/Entities/Article";
import { Category } from "@/lib/Models/Entities/Category";
import { strapiClient } from "@/lib/utils/strapi";

export const getArticles = async (query?: string | URLSearchParams | Record<string, any>) => {
  const searchParams = new URLSearchParams(query || "");
  const topicSlug = searchParams.get("topic") || "";
  const articles = strapiClient.collection("articles");

  try {
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
    console.log("Response:", result);
    return result as unknown as { data: Article[]; meta: any };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export async function getBlogBySlug(slug: string) {
  try {
    const articles = strapiClient.collection("articles");
    const result = await articles.find({
      filters: { slug: { $eq: slug } },
      fields: ["title", "slug", "publishedAt", "createdAt", "description"],
      populate: {
        author: {
          fields: ["createdAt", "documentId", "email", "id", "name", "publishedAt", "updatedAt"],
          populate: { avatar: true },
        },
        category: true,
        cover: true,
        topics: true,
        blocks: { populate: "*" },
      },
      pagination: { page: 1, pageSize: 1 },
    });

    return (result.data?.[0] as unknown as Article) || null;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
}

export async function getBlogCategories() {
  try {
    const categories = strapiClient.collection("categories");
    const result = await categories.find({
      fields: ["id", "documentId", "slug", "name", "description"],
      populate: { topics: true },
      pagination: { page: 1, pageSize: 100 },
    });
    return result as unknown as { data: Category[]; meta: any };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}
