"use client";
import { Article } from "@/lib/Models/Entities/Article";
import styles from "./BlogList.module.css";
import BlogCard from "../BlogCard/BlogCard";
import sharedStyles from "../../blog/_shared-css/shared.module.css";
import clsx from "clsx";

export default function BlogList({ articles }: { articles: Article[] }) {
  return (
    <div className={clsx(styles.blogListWrapper)}>
      <div className={styles.blogGrid}>
        {articles.map((article, idx) => (
          <BlogCard isFeatured={idx <= 1} key={article.id} article={article} style={{ "--blog-index": `post${idx}` }} />
        ))}
      </div>
    </div>
  );
}
