import { getBlogBySlug } from "@/lib/methods/serverside/blogs";
import mapComponents from "../_components/blog";
import BlogHeader from "../_components/ui/BlogHeader";
import React from "react";
import sharedStyles from "@/app/(pages)/blog/_components/blog/_shared-css/shared.module.css";
import TopicBadge from "../_components/ui/TopicBadge/TopicBadge";
import { mediaUrl } from "@/lib/helpers/media";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<any> }): Promise<Metadata> {
  const slug = (await params).slug;
  const { title, description, cover } = await getBlogBySlug(slug);

  return {
    title,
    description,
    openGraph: {
      title: title,
      description,
      url: `${process.env.SITE_URL}/blog/${slug}`,
      images: cover?.url ? [{ url: mediaUrl(cover.url) }] : undefined,
    },
    alternates: {
      canonical: `${process.env.SITE_URL}/blog/${slug}`,
    },
  };
}

// DO NOT SET TO USE CLIENT!!! it could could expose the API key
export default async function BlogPost({ params }: { params: Promise<any> }) {
  const slug = (await params)?.slug;
  const article = await getBlogBySlug(slug);
  const { title, author, description, blocks, createdAt, publishedAt } = article;

  return (
    <div style={{ color: "var(--zaron-blue)", paddingBottom: "2rem" }}>
      <BlogHeader {...{ title, author, description, createdAt, publishedAt }} />
      {blocks?.length > 0 &&
        blocks.map((block, index) => {
          return <React.Fragment key={index}>{mapComponents({ data: block, index })}</React.Fragment>;
        })}
      <div className={sharedStyles.blogBlockContainer}>
        <div className={sharedStyles.blogBlock} style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
          {article.topics?.map((topic) => (
            <TopicBadge key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
}
