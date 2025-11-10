import { Article } from "@/lib/Models/Entities/Article";
import BlogList from "./_components/ui/BlogList/BlogList";
import { Metadata } from "next";
import { getArticles } from "@/lib/methods/serverside/blogs";
import sharedStyles from "./_components/blog/_shared-css/shared.module.css";
import clsx from "clsx";

export const revalidate = 60; // regenerate this page every 60s
// src/app/blog/page.tsx
export const dynamic = "force-dynamic";



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Zaronology - Blog",
    description: "Explore the latest articles and insights on Zaronology.",
  };
}

export default async function BlogPage() {
  const { data } = (await getArticles()) || { data: [] };

  return (
    <>
      <div className={clsx(sharedStyles?.blogContainer)}>
        <h1 className={clsx(sharedStyles?.blogComponent, "text-dark")}>Featured</h1>
      </div>
      <div className="p-4" style={{ display: "flex", flexGrow: "1" }}>
        <BlogList articles={data} />
      </div>
    </>
  );
}
