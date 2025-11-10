import { getBlogCategories } from "@/lib/methods/serverside/blogs";
import CategoryList from "../_components/ui/CategoryList";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = (await getBlogCategories()) || { data: [] };
  const categories = data.map((category) => category.name).join(", ");
  return {
    title: "Zaronology - Blog Topics",
    description: `Explore the latest articles from Zaronology. Topics: ${categories}`,
    openGraph: {
      title: "Zaronology - Blog Topics",
      description: `Explore the latest articles from Zaronology. Topics: ${categories}`,
      url: `${process.env.SITE_URL}/blog/topics`,
    },
  };
}

export default async function TopicsPage() {
  const { data } = (await getBlogCategories()) || { data: [] };
  console.log("Topics data:", data);

  return (
    <div style={{ color: "black" }} className="flex flex-col items-center">
      <CategoryList categories={data} />
    </div>
  );
}
